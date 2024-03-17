import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getUser, isAdmin, isLoggedIn } from './utils';
import Dashboard from './Dashboard';
import JobForm from './Admin';

import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {!isLoggedIn() ? (
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          {isAdmin() ? <Route path="admin/:id" element={<JobForm />} /> : null}
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      )}
    </BrowserRouter>
  </React.StrictMode>
);
