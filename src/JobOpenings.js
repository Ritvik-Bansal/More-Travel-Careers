import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { getUser, isAdmin } from './utils';
import LoadingPage from './LoadingPage';
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
} from '@mui/material';

import './ApplicantsModal.css';

const JobOpenings = () => {
  // State variables
  const [jobs, setJobs] = useState(); // Stores job listings
  const [applications, setApplications] = useState(); // Stores job applications
  const [selectedJobId, setSelectedJobId] = useState(); // Stores ID of selected job
  const [loaded, setLoaded] = useState(false); // Flag to indicate data loading status
  const [open, setOpen] = useState(false); // Flag to control modal visibility
  const user = getUser(); // Retrieve current user
  const [searchTerm, setSearchTerm] = useState(''); // Stores search term for filtering jobs

  // Memoized filtered job listings based on search term
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter(
      (job) =>
        job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to open modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
  };

  // Effect hook to fetch job listings and applications from Firestore
  useEffect(() => {
    async function fetchData() {
      // Fetch job listings
      const jobQuery = query(collection(db, 'job'));
      const jobSnapshot = await getDocs(jobQuery);
      const jobData = [];
      jobSnapshot.forEach((doc) => {
        const job = doc.data();
        if (job.active) {
          jobData.push({ ...job, id: doc.id });
        }
      });
      setJobs(jobData);
      setLoaded(true);

      // Fetch job applications
      const applicationQuery = query(collection(db, 'application'));
      const applicationSnapshot = await getDocs(applicationQuery);
      const applicationData = [];
      applicationSnapshot.forEach((doc) => {
        applicationData.push({ ...doc.data(), appId: doc.id });
      });
      setApplications(applicationData);
    }
    fetchData();
  }, []);

  // Memoized map of jobs to their corresponding applications
  const jobMap = useMemo(() => {
    const map = {};
    if (!jobs || !applications) return {};
    jobs.forEach((job) => {
      map[job.id] = applications?.filter((app) => app.jobId === job.id);
    });
    return map;
  }, [jobs, applications]);

  // Effect hook to filter jobs by selected location from query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedLocation = urlParams.get('location');
    if (selectedLocation && loaded) {
      setJobs((prevJobs) => {
        const filtered = prevJobs?.filter(
          (job) =>
            job?.location?.toLowerCase?.() ===
            selectedLocation?.toLowerCase?.()
        );
        return [...filtered];
      });
    }
  }, [loaded]);

  return (
    <>
      {/* Background container */}
      <div className="background-container-job-openings"></div>

      {/* Job openings section */}
      <section id="job-openings">
        {/* Display loading page while data is being fetched */}
        {!jobs && <LoadingPage />}

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-bar"
        />

        {/* List of filtered job listings */}
        <ul2>
          {filteredJobs?.map((job) => (
            <li2 data-location={job.location}>
              {/* Job details */}
              <h3>{job.name}</h3>
              <h5>
                <pre>
                  <i className="fas fa-map-marker-alt"></i> {job.location}{' '}
                  <i className="far fa-calendar"></i> {job.datePosted}
                </pre>
              </h5>
              <p>{job.description}</p>

              {/* Conditional rendering based on user role */}
              {isAdmin() ? (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {/* Button to view applications */}
                  {jobMap[job.id]?.length > 0 && (
                    <Button
                      variant="contained"
                      onClick={() => {
                        setSelectedJobId(job.id);
                        handleOpen();
                      }}
                    >
                      {`${jobMap[job.id]?.length} Application${
                        jobMap[job.id]?.length > 1 ? 's' : ''
                      }`}
                    </Button>
                  )}
                  {/* Link to edit job */}
                  <NavLink
                    to={`/admin/${job.id}`}
                    className="cta-button"
                    style={{ marginTop: '0' }}
                  >
                    Edit Job
                  </NavLink>
                </div>
              ) : (
                <>
                  {/* Conditional rendering based on user's application status */}
                  {jobMap[job.id]?.some?.((a) => a.user === user?.email) ? (
                    // Link to view application
                    <NavLink
                      to={`application/${
                        jobMap[job.id]?.find?.((a) => a.user === user?.email)
                          ?.appId
                      }`}
                      className="cta-button"
                    >
                      View Application
                    </NavLink>
                  ) : (
                    // Link to apply for job
                    <NavLink to={`apply/${job.id}`} className="cta-button">
                      Apply Now
                    </NavLink>
                  )}
                </>
              )}
            </li2>
          ))}
          {}
        </ul2>
      </section>

      {/* Modal for displaying applicants */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className="applicants-modal">
            {/* Title */}
            <Typography variant="h5" gutterBottom>
              Applicants List
            </Typography>
            {/* List of applicants */}
            <List>
              {jobMap[selectedJobId] &&
                jobMap[selectedJobId].map((applicant) => (
                  <ListItem
                    key={applicant.id}
                    button
                    component={NavLink}
                    to={`application/${applicant.appId}`}
                  >
                    {/* Applicant details */}
                    <ListItemText
                      primary={applicant.name}
                      secondary={applicant.email}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default JobOpenings;
