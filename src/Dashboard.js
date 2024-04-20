import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Apply from './Apply';
import Diversity from './Diversity';
import Culture from './Culture';
import Benefits from './Benefits';
import JobOpenings from './JobOpenings';
import Internships from './Internships';
import Header from './Header';
import FlexiWork from './FlexiWork';
import Testimonies from './Testimonies';
import HiringTips from './HiringTips';
import App from './App';
import JobForm from './Admin';
import { isAdmin } from './utils';

const Dashboard = () => (
  <>
    <Header />
    <Routes>
      <Route path="job-openings/apply/:id" element={<Apply />} />
      <Route
        path="job-openings/application/:id"
        element={<Apply prefilled />}
      />
      <Route path="job-openings/*" element={<JobOpenings />} />
      <Route path="internships/*" element={<Internships />} />
      <Route path="benefits/*" element={<Benefits />} />
      <Route path="culture/*" element={<Culture />} />
      <Route path="diversity/*" element={<Diversity />} />
      <Route path="flexible-work/*" element={<FlexiWork />} />
      <Route path="testimonies/*" element={<Testimonies />} />
      <Route path="hiring-tips/*" element={<HiringTips />} />
      {/* {isAdmin() ? <Route path="/admin/:id" element={<JobForm />} /> : null} */}
      <Route path="/*" element={<App />} />
    </Routes>
    <footer>
      <p>&copy; 2023 More Travel. All rights reserved.</p>
    </footer>
  </>
);

export default Dashboard;
