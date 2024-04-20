import React from 'react'; // Import React library
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import Apply from './Apply'; // Import Apply component
import Diversity from './Diversity'; // Import Diversity component
import Culture from './Culture'; // Import Culture component
import Benefits from './Benefits'; // Import Benefits component
import JobOpenings from './JobOpenings'; // Import JobOpenings component
import Internships from './Internships'; // Import Internships component
import Header from './Header'; // Import Header component
import FlexiWork from './FlexiWork'; // Import FlexiWork component
import Testimonies from './Testimonies'; // Import Testimonies component
import HiringTips from './HiringTips'; // Import HiringTips component
import App from './App'; // Import App component
import JobForm from './Admin'; // Import JobForm component
import { isAdmin } from './utils'; // Import isAdmin utility function

// Define Dashboard component
const Dashboard = () => (
  <>
    {/* Render Header component */}
    <Header />

    {/* Define routes for different pages */}
    <Routes>
      <Route path="job-openings/apply/:id" element={<Apply />} /> {/* Apply route */}
      <Route path="job-openings/application/:id" element={<Apply prefilled />} /> {/* Application route */}
      <Route path="job-openings/*" element={<JobOpenings />} /> {/* JobOpenings route */}
      <Route path="internships/*" element={<Internships />} /> {/* Internships route */}
      <Route path="benefits/*" element={<Benefits />} /> {/* Benefits route */}
      <Route path="culture/*" element={<Culture />} /> {/* Culture route */}
      <Route path="diversity/*" element={<Diversity />} /> {/* Diversity route */}
      <Route path="flexible-work/*" element={<FlexiWork />} /> {/* FlexiWork route */}
      <Route path="testimonies/*" element={<Testimonies />} /> {/* Testimonies route */}
      <Route path="hiring-tips/*" element={<HiringTips />} /> {/* HiringTips route */}
      {/* Admin route, conditionally rendered based on user role */}
      {isAdmin() ? <Route path="/admin/:id" element={<JobForm />} /> : null}
      <Route path="/*" element={<App />} /> {/* Default route */}
    </Routes>

    {/* Footer */}
    <footer>
      <p>&copy; 2023 More Travel. All rights reserved.</p>
    </footer>
  </>
);

export default Dashboard; // Export Dashboard component
