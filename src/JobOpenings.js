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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import './ApplicantsModal.css';

const JobOpenings = () => {
  const [jobs, setJobs] = useState();
  const [applications, setApplications] = useState();
  const [selectedJobId, setSelectedJobId] = useState();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const user = getUser();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the job listings based on the search term
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter(
      (job) =>
        job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  // Handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getJobs() {
      const q = query(collection(db, 'job'));
      const querySnapshot = await getDocs(q);
      setLoaded(true);
      const data = [];
      querySnapshot.forEach((doc) => {
        const dt = doc.data();
        if (!dt.active) {
          return;
        }
        data.push({ ...dt, id: doc.id });
        console.log(doc.id, ' => ', doc.data());
      });
      setJobs(data);
    }
    async function getApplications() {
      const q = query(collection(db, 'application'));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), appId: doc.id });
        console.log(doc.id, ' => ', doc.data());
      });
      setApplications(data);
    }
    getJobs();
    getApplications();
  }, []);

  const jobMap =
    useMemo(() => {
      const map = {};
      if (!jobs || !applications) return;
      jobs.forEach((job) => {
        map[job.id] = applications?.filter((app) => app.jobId === job.id);
      });
      return map;
    }, [jobs, applications]) || {};

  function filterJobsByLocation(location) {
    console.log({ location });

    console.log({ jobs });
  }

  // Get the selected location from the query parameter (e.g., ?location=Seattle)
  const urlParams = new URLSearchParams(window.location.search);
  const selectedLocation = urlParams.get('location');

  // If a location is selected, filter the job listings
  useEffect(() => {
    if (selectedLocation && loaded) {
      setJobs((jbs) => {
        const filtered = jbs?.filter(
          (jb) =>
            jb?.location?.toLowerCase?.() === selectedLocation?.toLowerCase?.()
        );
        return [...filtered];
      });
    }
  }, [selectedLocation, loaded]);

  return (
    <>
      <div className="background-container-job-openings"></div>

      <section id="job-openings">
        {!jobs && <LoadingPage />}
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="search-bar"
        />
        <ul2>
          {filteredJobs?.map((job) => (
            <li2 data-location={job.location}>
              <h3>{job.name}</h3>
              <h5>
                <pre>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  <span>{` ${job.location}`}</span>
                  <span>{`        `}</span>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{` ${job.datePosted}`}</span>
                </pre>
              </h5>
              <p>{job.description}</p>
              {isAdmin() ? (
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {jobMap[job.id]?.length > 0 && (
                    <Button
                      //   to={`applications/${job.id}`}
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
                  {jobMap[job.id]?.some?.((a) => a.user === user?.email) ? (
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
                    <NavLink to={`apply/${job.id}`} className="cta-button">
                      Apply Now
                    </NavLink>
                  )}
                </>
              )}
            </li2>
          ))}
        </ul2>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className="applicants-modal">
            <Typography variant="h5" gutterBottom>
              Applicants List
            </Typography>
            <List>
              {jobMap[selectedJobId] &&
                jobMap[selectedJobId].map((applicant) => (
                  <ListItem
                    key={applicant.id}
                    button
                    component={NavLink}
                    to={`application/${applicant.appId}`}
                  >
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
