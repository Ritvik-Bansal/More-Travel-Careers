import React, { useState } from 'react'; // Import React and useState hook
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate for navigation
import { isLoggedIn, isAdmin, getUser } from './utils'; // Import utility functions
import { Button } from '@mui/material'; // Import Button component from Material-UI
import LoginModal from './LoginModal'; // Import LoginModal component
import UserInfoModal from './UserInfoModal'; // Import UserInfoModal component

import './header.css'; // Import CSS styles

// Define admin email
export const ADMIN_EMAIL = 'admin@portal.com';

const Header = () => {
  // State for login modal visibility and drawer toggle
  const [loginOpen, setLoginOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Function to open drawer
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  // Function to close drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Render header component
  return (
    <>
      <header className="small-header">
        {/* Render LoginModal */}
        <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

        {/* Conditional rendering for mobile view */}
        {window.innerWidth < 600 ? (
          <>
            <div style={{ display: 'flex' }}>
              {/* Render drawer toggle button */}
              <div className="drawer-toggle-btn-container">
                <div className="drawer-toggle-btn" onClick={openDrawer}>
                  &#9776;
                </div>
              </div>
            </div>

            {/* Render mobile drawer */}
            <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
              <div className="drawer-header">
                <img src="more_travel_logo.png" alt="Company Logo" />
                <div className="drawer-close-btn" onClick={closeDrawer}>
                  &times;
                </div>
              </div>

              {/* Render drawer navigation */}
              <div className="drawer-nav">
                <NavLink to="index" onClick={closeDrawer}>Home</NavLink>
                <NavLink to="job-openings" onClick={closeDrawer}>Current Job Openings</NavLink>
                <NavLink to="internships" onClick={closeDrawer}>Internships</NavLink>
                <NavLink onClick={closeDrawer} to="benefits">Benefits</NavLink>
                <NavLink onClick={closeDrawer} to="culture">Culture</NavLink>
                <NavLink onClick={closeDrawer} to="diversity">Diversity</NavLink>
                <NavLink onClick={closeDrawer} to="flexible-work">Flexible Work</NavLink>
                <NavLink onClick={closeDrawer} to="hiring-tips">Hiring Tips</NavLink>
                <NavLink onClick={closeDrawer} to="testimonies">Testimonials</NavLink>
              </div>
            </div>
          </>
        ) : (
          // Conditional rendering for desktop view
          <>
            <div className="header-content">
              {/* Render company logo */}
              <NavLink to="index">
                <img src="more_travel_logo.png" alt="Company Logo" id="company-logo" />
              </NavLink>
            </div>

            {/* Render desktop navigation */}
            <nav>
              <NavLink to="index">Home</NavLink>
              <NavLink to="job-openings">Current Job Openings</NavLink>
              <NavLink to="internships">Internships</NavLink>
              <div className="dropdown">
                <button className="dropbtn">Life at More Travel</button>
                <div className="dropdown-content">
                  <NavLink to="benefits">Benefits</NavLink>
                  <NavLink to="culture">Culture</NavLink>
                  <NavLink to="diversity">Diversity</NavLink>
                  <NavLink to="flexible-work">Flexible Work</NavLink>
                </div>
              </div>
              <NavLink to="hiring-tips">Hiring Tips</NavLink>
              <NavLink to="testimonies">Testimonials</NavLink>
            </nav>
          </>
        )}

        {/* Render apply button based on user role */}
        <div style={{ display: 'flex' }}>
          {isAdmin() ? (
            <NavLink to="admin/new" className="apply-button">Add Job</NavLink>
          ) : (
            <NavLink to="job-openings" className="apply-button">Apply Now</NavLink>
          )}

          {/* Render login/logout button */}
          {!isLoggedIn() ? (
            <Button className="logout-button" onClick={() => setLoginOpen(true)}>Login</Button>
          ) : (
            <UserInfoModal />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
