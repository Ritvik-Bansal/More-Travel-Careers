import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import './index.css'; // Import CSS styles
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter for routing
import { getUser, isAdmin, isLoggedIn } from './utils'; // Import utility functions
import Dashboard from './Dashboard'; // Import Dashboard component
import JobForm from './Admin'; // Import JobForm component
import './firebase'; // Import Firebase configuration


// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application inside the root
root.render(
  // Enable React strict mode to highlight potential issues
  <React.StrictMode>
    {/* Set up routing with BrowserRouter */}
    <BrowserRouter>
      {/* Conditionally render routes based on user authentication */}
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
