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

const LoginModal = ({ open, onClose }) => {
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem('token', res.user.accessToken);
      window.localStorage.setItem('user', JSON.stringify(res.user));
      navigate('/');
      window.location.reload();
      //   alert('Sign in successful!');
    } catch (error) {
      alert(`Sign in failed: ${error.message}`);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem('token', res.user.accessToken);
      window.localStorage.setItem('user', JSON.stringify(res.user));
      navigate('/');
      window.location.reload();
      //   alert('Sign up successful!');
    } catch (error) {
      alert(`Sign up failed: ${error.message}`);
    }
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ event: event.target });
  };

  return (
    <Modal open={open} onClose={onClose} className="modal">
      <Paper className="paper">
        <Tabs value={tabValue} onChange={handleChangeTab} centered>
          <Tab label="User" />
          <Tab label="Admin" />
        </Tabs>
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
