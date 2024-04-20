import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  function searchLocation() {
    const locationInput = document.getElementById('locationInput');
    const userInput = locationInput.value.trim().toLowerCase();

    // List of available locations (convert them to lowercase)
    const locations = ['seattle', 'new delhi', 'edmonton'];

    // Checks if the user input matches one of the predefined locations
    if (locations.includes(userInput)) {
      // Redirects to job-openings with the selected location
      window.location.href =
        'job-openings?location=' + encodeURIComponent(userInput);
    } else {
      // Shows an alert for invalid location
      alert('No jobs available in this location.');
    }
  }

  function autocomplete() {
    const locationInput = document.getElementById('locationInput');
    const suggestionsContainer = document.getElementById(
      'suggestions-container'
    );

    // List of available locations
    const locations = ['Seattle', 'New Delhi', 'Edmonton'];

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Get user input
    const userInput = locationInput.value.toLowerCase();

    // Filter locations based on user input
    const filteredLocations = locations.filter((location) =>
      location.toLowerCase().includes(userInput)
    );

    // Display suggestions
    filteredLocations.forEach((location) => {
      const suggestionItem = document.createElement('li');
      suggestionItem.innerText = location;
      suggestionItem.addEventListener('click', () => {
        locationInput.value = location;
        suggestionsContainer.innerHTML = '';
      });

      // Add some styling for spacing
      suggestionItem.style.margin = '2px'; // Adjust the value as needed

      suggestionsContainer.appendChild(suggestionItem);
    });

    // Show or hide suggestions container
    if (filteredLocations.length > 0) {
      suggestionsContainer.style.display = 'block';
    } else {
      suggestionsContainer.style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div className="background-container-careers">
        <div id="header-container"></div>
      </div>

      <section id="home-section">
        <h2>We are family at More Travels</h2>
        <ul3 className="job-list">
          <li className="job-item">
            <NavLink to="job-openings">
              <img
                src="main-images/job-openings-home.jpg"
                alt="Job Openings Image"
              />
              <h3>Job Openings</h3>
              <p2>
                We have a multitude of job openings from Travel Consultatants to
                Technology Specialist! Please look through our availability and
                apply!
              </p2>
            </NavLink>
          </li>
          <li className="job-item">
            <NavLink to="internships">
              <img
                src="main-images/internships-home.jpg"
                alt="Job Openings Image"
              />
              <h3>Internship Opportunities</h3>
              <p2>
                We also have many opportunities for high school and college
                students to learn more about the travel industry! We look at
                this as learning opportunities for the next generation and do
                not expect interns to know everything from day one.
              </p2>
            </NavLink>
          </li>
          <li className="job-item">
            <NavLink to="benefits">
              <img
                src="main-images/benefits-home.jpg"
                alt="Job Openings Image"
              />
              <h3>Benefits</h3>
              <p2>
                We include a lot of benefits for our employees at More Travels.
                Enjoy discounts, travel perks, aid packages, & a lot more! We
                also prioritize the growth of our employees by providing
                valuable learning opportunities and mental health time.
              </p2>
            </NavLink>
          </li>
          <li className="job-item">
            <NavLink to="culture">
              <img
                src="main-images/diversity-home.jpg"
                alt="Job Openings Image"
              />
              <h3>Culture</h3>
              <p2>
                We have an incredibly inclusive environment at More Travels, and
                all employees are valued, respected, and empowered to work with
                us. Our environment creates innovation and enriches a diverse
                working style.
              </p2>
            </NavLink>
          </li>
        </ul3>
      </section>
    </div>
  );
}

export default App;
