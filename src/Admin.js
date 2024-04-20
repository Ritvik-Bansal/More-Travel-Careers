import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  TextareaAutosize,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
} from '@mui/material';
import {
  collection,
  addDoc,
  query,
  getDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';
import { useNavigate, useParams } from 'react-router-dom';

import './job.css';
import Header from './Header';

// Component for job form
const JobForm = () => {
  // States for form fields
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState(true);

  // Get job ID from URL params
  const { id } = useParams();

  // Navigate to a different page
  const navigate = useNavigate();

  // Fetch job details from Firestore based on the ID
  useEffect(() => {
    async function getJob() {
      try {
        // Retrieve job document from Firestore
        const q = doc(db, 'job', id);
        const snap = await getDoc(q);

        // Extract data from the document
        const data = snap.data();
        setActive(data.active);
        setLocation(data.location);
        setDescription(data.description);
        setName(data.name);
      } catch (error) {
        console.error('Error retrieving job data:', error);
        // Handle error gracefully
      }
    }

    // If the ID is not 'new', fetch the job data
    if (id !== 'new') {
      getJob();
    }
  }, [id]);

  // Function to handle posting a new job or updating an existing job
  const handlePostJob = async () => {
    try {
      // Get the current date
      const currentDate = new Date().toLocaleDateString();

      // Construct job data object
      const jobData = {
        name,
        location,
        description,
        datePosted: currentDate,
        active,
      };

      // Check if all fields are filled
      if (!name || !location || !description) {
        alert('Please enter complete data.');
        return;
      }

      // Update existing job or save new job data to Firestore
      if (id !== 'new') {
        // Update existing job data in Firestore
        const q = doc(db, 'job', id);
        await updateDoc(q, jobData);
      } else {
        // Save new job data to Firestore
        await addDoc(collection(db, 'job'), jobData);
      }

      // Navigate to job openings page after successful posting/update
      navigate('/job-openings');
    } catch (error) {
      console.error('Error posting job:', error);
      alert('An error occurred while posting the job. Please try again.');
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className="job-form-container">
          <Typography variant="h5" gutterBottom>
            Post a Job
          </Typography>

          {/* Input field for job title */}
          <TextField
            fullWidth
            id="name"
            label="Job Title"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Dropdown for job location */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="location-label">Job Location</InputLabel>
            <Select
              label="Job Location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {/* Hardcoded options for job locations */}
              <MenuItem value="Seattle, WA">Seattle, WA</MenuItem>
              <MenuItem value="New Delhi, India">New Delhi, India</MenuItem>
              <MenuItem value="Edmonton, AB">Edmonton, AB</MenuItem>
            </Select>
          </FormControl>

          {/* Textarea for job description */}
          <TextareaAutosize
            fullWidth
            id="description"
            placeholder="Job Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
          />
          
          {/* Switch to toggle job status (active/inactive) */}
          <FormControlLabel
            control={
              <Switch
                defaultChecked={active}
                value={active}
                onChange={() => setActive((a) => !a)}
              />
            }
            label="Active"
          />

          {/* Button to submit the job form */}
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handlePostJob}
            className="post-button"
          >
            Post Job
          </Button>
        </div>
      </Container>
    </>
  );
};

export default JobForm;
