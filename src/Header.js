import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { isLoggedIn, isAdmin, getUser } from './utils';
import { Button } from '@mui/material';
import LoginModal from './LoginModal';
import UserInfoModal from './UserInfoModal';

import './header.css';

export const ADMIN_EMAIL = 'admin@portal.com';

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  console.log({ isDrawerOpen });

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  {
    /* <NavLink to="login" className="apply-button">
Login
</NavLink> */
  }
  return (
    <>
      <header className="small-header">
        <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
        {window.innerWidth < 600 ? (
          <>
            <div style={{ display: 'flex' }}>
              <div className="drawer-toggle-btn-container">
                <div className="drawer-toggle-btn" onClick={openDrawer}>
                  &#9776;
                </div>
              </div>
            </div>
            <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
              <div className="drawer-header">
                <img src="more_travel_logo.png" alt="Company Logo" />
                <div className="drawer-close-btn" onClick={closeDrawer}>
                  &times;
                </div>
              </div>
              <div className="drawer-nav">
                <NavLink to="index" onClick={closeDrawer}>
                  Home
                </NavLink>
                <NavLink to="job-openings" onClick={closeDrawer}>
                  Current Job Openings
                </NavLink>
                <NavLink to="internships" onClick={closeDrawer}>
                  Internships
                </NavLink>
                <NavLink onClick={closeDrawer} to="benefits">
                  Benefits
                </NavLink>
                <NavLink onClick={closeDrawer} to="culture">
                  Culture
                </NavLink>
                <NavLink onClick={closeDrawer} to="diversity">
                  Diversity
                </NavLink>
                <NavLink onClick={closeDrawer} to="flexible-work">
                  Flexible Work
                </NavLink>
                <NavLink onClick={closeDrawer} to="hiring-tips">
                  Hiring Tips
                </NavLink>
                <NavLink onClick={closeDrawer} to="testimonies">
                  Testimonials
                </NavLink>
                {/* Add other navigation links as needed */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header-content">
              <NavLink to="index">
                <img
                  src="more_travel_logo.png"
                  alt="Company Logo"
                  id="company-logo"
                />
              </NavLink>
            </div>
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
        <div style={{ display: 'flex' }}>
          {isAdmin() ? (
            <NavLink to="admin/new" className="apply-button">
              Add Job
            </NavLink>
          ) : (
            <NavLink to="job-openings" className="apply-button">
              Apply Now
            </NavLink>
          )}
          {!isLoggedIn() ? (
            <Button
              className="logout-button"
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
          ) : (
            <UserInfoModal />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
