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
  const [jobs, setJobs] = useState();
  const [applications, setApplications] = useState();
  const [selectedJobId, setSelectedJobId] = useState();
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const user = getUser();

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
        <ul2>
          {jobs?.map((job) => (
            <li2 data-location={job.location}>
              <h3>{job.name}</h3>
              <h5>
                <pre>
                  <i className="fas fa-map-marker-alt"></i> {job.location}{' '}
                  <i className="far fa-calendar"></i> {job.datePosted}
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
          {/* <li2 data-location="Seattle">
            <h3>Engineer</h3>
            <h5>
              <pre>
                {' '}
                <i className="fas fa-map-marker-alt"></i> Seattle, WA{' '}
                <i className="far fa-calendar"></i> 11/27/2023
              </pre>
            </h5>
            <p>
              Passionate about travel? Join our team as a Travel Consultant,
              where you'll assist clients in planning and booking memorable
              trips, providing expert advice on destinations, accommodations,
              and travel options.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="Edmonton">
            <h3>Customer Service Representative:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> Edmonton, AB{' '}
                <i className="far fa-calendar"></i> 11/11/2023
              </pre>
            </h5>
            <p>
              Elevate customer experiences as a Customer Service Representative.
              Your role involves addressing inquiries, resolving issues, and
              ensuring our clients receive exceptional support throughout their
              travel journey.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="Seattle">
            <h3>Sales Representative:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> Seattle, WA{' '}
                <i className="far fa-calendar"></i> 09/04/2023
              </pre>
            </h5>
            <p>
              Join us as a Sales Representative and showcase the wonders of
              travel to our clients. You'll be responsible for selling travel
              packages, accommodations, and services, turning dreams into
              unforgettable adventures.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="New Delhi">
            <h3>Travel Coordinator:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> New Delhi, India{' '}
                <i className="far fa-calendar"></i> 12/04/2023
              </pre>
            </h5>
            <p>
              Become a Travel Coordinator and orchestrate seamless travel
              experiences. Manage itineraries, coordinate logistics, and ensure
              our clients' journeys are well-planned and stress-free.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="Seattle">
            <h3>Digital Marketing Specialist:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> Seattle, WA{' '}
                <i className="far fa-calendar"></i> 10/28/2023
              </pre>
            </h5>
            <p>
              Shape the online presence of our travel agency as a Digital
              Marketing Specialist. Develop and implement digital strategies to
              promote our services, engage audiences, and inspire wanderlust.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="Edmonton">
            <h3>Technology and Systems Manager:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> Edmonton, AB{' '}
                <i className="far fa-calendar"></i> 09/27/2023
              </pre>
            </h5>
            <p>
              Join our tech-savvy team as a Technology and Systems Manager.
              Oversee the smooth operation of our booking systems and website,
              ensuring that our technological infrastructure enhances the travel
              experience.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2>
          <li2 data-location="Edmonton">
            <h3>Corporate Travel Consultant:</h3>
            <h5>
              <pre>
                <i className="fas fa-map-marker-alt"></i> Edmonton, AB{' '}
                <i className="far fa-calendar"></i> 10/18/2023
              </pre>
            </h5>
            <p>
              Navigate the world of business travel as a Corporate Travel
              Consultant. Specialize in arranging business trips, managing
              corporate accounts, and providing top-notch service to our
              corporate clients.
            </p>
            <NavLink to="apply" className="cta-button">
              Apply Now
            </NavLink>
          </li2> */}
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
