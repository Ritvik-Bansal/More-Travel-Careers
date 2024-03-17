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

const applicantsData = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  // Add more applicants as needed
];

const ApplicantsModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        View Applicants
      </Button>
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
              {applicantsData.map((applicant, index) => (
                <ListItem key={index}>
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
