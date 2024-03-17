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

const JobForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState(true);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getJob() {
      const q = doc(db, 'job', id);
      const snap = await getDoc(q);
      const data = snap.data();
      setActive(data.active);
      setLocation(data.location);
      setDescription(data.description);
      setName(data.name);
    }
    if (id !== 'new') {
      getJob();
    }
  }, [id]);

  const handlePostJob = async () => {
    try {
      const currentDate = new Date().toLocaleDateString();
      const jobData = {
        name,
        location, // Updated to use dropdown value
        description,
        datePosted: currentDate,
        active,
      };

      if (!name || !location || !description) {
        alert('Please enter complete data.');
        return;
      }

      if (id !== 'new') {
        const q = doc(db, 'job', id);
        await updateDoc(q, jobData);
      } else {
        // Save data to Firebase jobs collection
        await addDoc(collection(db, 'job'), jobData);
      }
      navigate('/job-openings');
    } catch (e) {
      console.error('Error posting job:', e);
      alert('An error occurred while posting the job. Please try again.');
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <div className="job-form-container">
          <Typography variant="h5" gutterBottom>
            Post a Job
          </Typography>
          <TextField
            fullWidth
            id="name"
            label="Job Title"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="location-label">Job Location</InputLabel>
            <Select
              label="Job Location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="Seattle">Seattle</MenuItem>
              <MenuItem value="New Delhi">New Delhi</MenuItem>
              <MenuItem value="Edmonton">Edmonton</MenuItem>
            </Select>
          </FormControl>

          <TextareaAutosize
            fullWidth
            id="description"
            placeholder="Job Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-input"
          />
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
