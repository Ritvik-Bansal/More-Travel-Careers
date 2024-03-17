import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { isLoggedIn, isAdmin, getUser } from './utils';
import { Button } from '@mui/material';
import DropDownMenu from './Dropdown';
import Arrow, { ARROW_DIR } from './arrow';
import { UserIcon } from './UserIcon';
import UserImage from './UserImage';

import './header.css';

export const ADMIN_EMAIL = 'admin@portal.com';

const UserInfoModal = () => {
  const navigate = useNavigate();
  const user = getUser();
  const [dropDown, setDropDown] = useState(false);

  const handleCloseDropDown = () => {
    setDropDown(false);
  };
  const handleOpenDropDown = () => {
    setDropDown(true);
  };
  const onLogout = () => {
    window.localStorage.clear('token');
    window.localStorage.clear('user');
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="user-info-container" onClick={handleOpenDropDown}>
      <div className="user-image-container">
        <UserIcon />
      </div>
      {window.innerWidth > 600 && (
        <div className="info-text-container">
          <div className="user-name">{user?.email}</div>
          <div className="user-id">
            {user?.email === ADMIN_EMAIL ? 'Admin' : 'User'}
          </div>
        </div>
      )}
      <div>
        <Arrow type={ARROW_DIR.DOWN} width={15} height={15} />
        {dropDown && (
          <DropDownMenu
            onClose={handleCloseDropDown}
            alignment="right"
            topSpacing={20}
          >
            <div className="user-profile-container">
              <div className="user-image-container">
                <UserImage />
              </div>
              <div className="user-profile-name">
                {user?.email} - (
                {user?.email === ADMIN_EMAIL ? 'Admin' : 'User'})
              </div>
              <Button className="logout-button" onClick={onLogout}>
                LOGOUT
              </Button>
            </div>
          </DropDownMenu>
        )}
      </div>
    </div>
  );
};

export default UserInfoModal;
