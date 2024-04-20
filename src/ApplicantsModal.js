import React, { useState } from 'react';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import './ApplicantsModal.css';

// Sample data for applicants
const applicantsData = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  // Add more applicants as needed
];

const ApplicantsModal = () => {
  const [open, setOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to trigger opening the modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        View Applicants
      </Button>
      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        {/* Fade effect for modal */}
        <Fade in={open}>
          <div className="applicants-modal">
            {/* Title for the modal */}
            <Typography variant="h5" gutterBottom>
              Applicants List
            </Typography>
            {/* List of applicants */}
            <List>
              {/* Mapping through applicantsData to render each applicant */}
              {applicantsData.map((applicant, index) => (
                <ListItem key={index}>
                  {/* Displaying applicant name and email */}
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
    </div>
  );
};

export default ApplicantsModal;
