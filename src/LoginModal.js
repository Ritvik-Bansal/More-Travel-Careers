import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Modal,
  Paper,
  Tabs,
  Tab,
  Typography,
  TextField,
} from '@mui/material';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

// Functional component for the login modal
const LoginModal = ({ open, onClose }) => {
  // Firebase authentication instance
  const auth = getAuth();

  // State variables for email, password, and selected tab value
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tabValue, setTabValue] = useState(0);

  // React Router navigation hook
  const navigate = useNavigate();

  // Handler for user sign-in
  const handleSignIn = async () => {
    try {
      // Attempt to sign in user with provided credentials
      const res = await signInWithEmailAndPassword(auth, email, password);
      // Store user's access token and information in local storage
      window.localStorage.setItem('token', res.user.accessToken);
      window.localStorage.setItem('user', JSON.stringify(res.user));
      // Navigate to home page after successful sign-in
      navigate('/');
      // Reload the page to reflect authenticated state
      window.location.reload();
    } catch (error) {
      // Alert user if sign-in fails
      alert(`Sign in failed: ${error.message}`);
    }
  };

  // Handler for user sign-up
  const handleSignUp = async () => {
    try {
      // Attempt to create a new user with provided credentials
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Store user's access token and information in local storage
      window.localStorage.setItem('token', res.user.accessToken);
      window.localStorage.setItem('user', JSON.stringify(res.user));
      // Navigate to home page after successful sign-up
      navigate('/');
      // Reload the page to reflect authenticated state
      window.location.reload();
    } catch (error) {
      // Alert user if sign-up fails
      alert(`Sign up failed: ${error.message}`);
    }
  };

  // Handler for tab change
  const handleChangeTab = (event, newValue) => {
    // Update the selected tab value
    setTabValue(newValue);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Log the event object for debugging purposes
    console.log({ event: event.target });
  };

  return (
    // Modal component to display login form
    <Modal open={open} onClose={onClose} className="modal">
      {/* Paper component for styling the modal content */}
      <Paper className="paper">
        {/* Tabs for switching between "User" and "Admin" modes */}
        <Tabs value={tabValue} onChange={handleChangeTab} centered>
          <Tab label="User" />
          <Tab label="Admin" />
        </Tabs>
        {/* Conditional rendering based on selected tab */}
        {tabValue === 0 && (
          <Typography variant="h6" gutterBottom>
            User Login/Sign Up
          </Typography>
        )}
        {tabValue === 1 && (
          <Typography variant="h6" gutterBottom>
            Admin Login
          </Typography>
        )}
        {/* Form for email, password inputs, and buttons */}
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          {/* Button for user login */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="button"
            onClick={handleSignIn}
          >
            Log In
          </Button>
          {/* Conditional rendering of sign-up button for user mode */}
          {tabValue === 0 && (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="button"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          )}
        </form>
      </Paper>
    </Modal>
  );
};

export default LoginModal;
