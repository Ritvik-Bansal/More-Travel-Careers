// Import necessary modules from React and Firebase
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { isLoggedIn, getUser } from './utils';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Function to validate if all form controls are filled
function validateForm() {
  // Get all form controls
  const formControls = document.querySelectorAll(
    '.form-control input, .form-control textarea, .form-control select'
  );

  // Check if all form controls are filled
  for (const control of formControls) {
    if (!control.value.trim()) {
      return false; // Return false if any control is not filled
    }
  }
  return true; // Return true if all controls are filled
}

// Function to parse resume template and extract relevant information
const parseResumeTemplate = (resumeText) => {
  const lines = resumeText.split('\n');
  const obj = {
    address: '',
    coverLetter: '',
    date: '',
    interests: '',
    role: 'student',
    summary: '',
    questions: '',
    certifications: '',
    institution: '',
    name: '',
    email: '',
    phone: '',
    awards: '',
    skills: '',
    statement: '',
    degree: '',
    coursework: '',
    position: '',
  };

  lines.forEach((line) => {
    const [key, value] = line.split(':').map((item) => item.trim());
    if (!value) return;
    switch (key) {
      // Fill object properties based on parsed data
      case 'Name':
        obj.name = value;
        break;
      case 'Address':
        obj.address = value;
        break;
      case 'E-mail':
        obj.email = value;
        break;
      case 'Phone-Number':
        obj.phone = value;
        break;
      case 'Objective Statement':
        obj.statement = value;
        break;
      case 'Professional Summary':
        obj.summary = value;
        break;
      case '•\tDegree earned':
        console.log({ value });
        obj.degree = value;
        break;
      case '•\tInstitution':
        obj.institution = value;
        break;
      case '•\tName of University of College':
        obj.institution = value;
        break;
      case '•\tYear of Graduation':
        obj.date = value;
        break;
      case '•\tRelevant Coursework':
        obj.coursework = value;
        break;
      case 'Skills':
        obj.skills = value.split(',').map((skill) => skill.trim());
        break;
      case 'Certifications':
        obj.certifications = value.split(',').map((cert) => cert.trim());
        break;
      case 'Awards':
        obj.awards = value.split(',').map((award) => award.trim());
        break;
      case 'Personal Interests':
        obj.interests = value;
        break;
      case 'Position Applied':
        obj.position = value;
        break;
      default:
        // Ignore other fields
        break;
    }
  });

  return obj;
};

// Apply component to manage the job application form
const Apply = ({ prefilled = false }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    statement: '',
    summary: '',
    role: 'student',
    degree: '',
    institution: '',
    date: '',
    coursework: '',
    skills: '',
    certifications: '',
    awards: '',
    interests: '',
    coverLetter: '',
    position: '',
    questions: '',
  });

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Get parameters from URL
  const param = useParams();

  // Fetch application data if prefilled is true
  useEffect(() => {
    async function getApplications() {
      const q = query(collection(db, 'application'));
      const querySnapshot = await getDocs(q);
      let data = {};
      querySnapshot.forEach((doc) => {
        if (doc.id === param.id) {
          data = doc.data();
          return;
        }
        console.log(doc.id, ' => ', doc.data());
      });
      setFormData(data);
    }
    if (prefilled) {
      getApplications();
    }
  }, [prefilled]);

  // Handle file change event (resume upload)
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      const fData = parseResumeTemplate(content);
      setFormData(fData);
    };
    reader.readAsText(file);
  };

  // Handle change in form fields
  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  // Render message if no data found for the application
  if (prefilled && !formData) {
    return <h1>No data found for this application</h1>;
  }

  // Handle form submission
  async function onSubmit(event) {
    event.preventDefault();

    const data = { ...formData };
    data.user = getUser()?.email;
    data.jobId = param.id;

    validateForm();
    // Validate form fields here if needed
    try {
      const docRef = await addDoc(collection(db, 'application'), data);
      console.log('Document written with ID: ', docRef.id);
      navigate('/');
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Something went wrong, please try again');
    }
  }


  // Return the JSX for the Apply component, which renders the job application form
return (
  <div>
    {/* Background container for the application */}
    <div class="background-container-application"></div>

    {/* Check if the user is logged in */}
    {!isLoggedIn() ? (
      <h2>Please login to apply.</h2>
    ) : (
      // Render the form if the user is logged in
      <form id="form" onSubmit={onSubmit}>
        {/* Label for resume upload */}
        <label htmlFor="resume" id="label-resume">
          Upload your Resume and Information will automatically be filled in!
        </label>
        <br />
        <label htmlFor="resume" id="label-resume">
          -----------------------------------------------------------------------------
        </label>
        <br />
        {/* Input field for resume upload */}
        <input id="resume" type="file" onChange={handleFileChange} />
        <br />
        <label htmlFor="resume" id="label-resume">
          -----------------------------------------------------------------------------
        </label>
        <br /> <br />

        {/* 
        <h3>OR</h3> */}

        {/* Form fields */}
        {/* Fieldset to disable form fields if prefilled */}
        <fieldset disabled={prefilled} style={{ border: 'none' }}>
          {/* Contact Information section */}
          <div class="form-control">
            <label
              htmlFor="Contact Information"
              id="label-contact-information"
            >
              Contact Information
            </label>

            {/* Name input field */}
            <h5>Name:</h5>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            {/* Address input field */}
            <h5>Address:</h5>
            <input
              type="text"
              id="address"
              placeholder="Enter your home address"
              value={formData.address}
              onChange={handleChange}
            />

            {/* Email input field */}
            <h5>E-mail:</h5>
            <input
              type="email"
              id="email"
              placeholder="Enter your e-mail address"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Phone number input field */}
            <h5>Phone-Number:</h5>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Objective Statement section */}
          <div class="form-control">
            <label
              htmlFor="objective statement"
              id="label-objective-statement"
            >
              Objective Statement
            </label>

            {/* Input field for objective statement */}
            <h5>
              Briefly explain why you are applying for the position and what
              you hope to contribute to the travel agency.
            </h5>
            <input
              type="text"
              id="statement"
              placeholder="Enter your objective statement"
              value={formData.statement}
              onChange={handleChange}
            />
          </div>

          {/* Professional Summary section */}
          <div class="form-control">
            <label
              htmlFor="professional summary"
              id="label-professional-summary"
            >
              Professional Summary
            </label>

            {/* Input field for professional summary */}
            <h5>
              Highlight key qualifications and experiences that make you an
              ideal candidate for the role.
            </h5>
            <input
              type="text"
              id="summary"
              placeholder="Enter your professional summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </div>

          {/* Education section */}
          <div class="form-control">
            <label htmlFor="education" id="label-education">
              Education
            </label>

            {/* Dropdown for role selection */}
            <h5>Which option best describes you?</h5>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="intern">Intern</option>
              <option value="professional">Professional</option>
              <option value="other">Other</option>
            </select>

            {/* Degree input field */}
            <h5>Degree earned in education</h5>
            <input
              type="text"
              id="degree"
              placeholder="Your Degree, e.g., Bachelor of Arts in Tourism Management"
              value={formData.degree}
              onChange={handleChange}
            />

            {/* Institution input field */}
            <h5>Institution</h5>
            <input
              type="text"
              id="institution"
              placeholder="Name of University of College"
              value={formData.institution}
              onChange={handleChange}
            />

            {/* Graduation date input field */}
            <h5>Graduation Date</h5>
            <input
              type="text"
              id="date"
              placeholder="Year of Graduation"
              value={formData.date}
              onChange={handleChange}
            />

            {/* Relevant coursework input field */}
            <h5>Relevant Coursework (if applicable)</h5>
            <input
              type="text"
              id="coursework"
              placeholder="List any specific coursework relevant to the position, e.g., Travel Planning, Customer Service in Hospitality"
              value={formData.coursework}
              onChange={handleChange}
            />
          </div>

          {/* Skills, Certifications, Awards section */}
          <div class="form-control">
            <label htmlFor="skills" id="label-education">
              Skills, Certifications, Awards, Achievements
            </label>

            {/* Relevant skills input field */}
            <h5>Relevant Skills (if applicable)</h5>
            <input
              type="text"
              id="skills"
              placeholder="List all relevant skills"
              value={formData.skills}
              onChange={handleChange}
            />

            {/* Relevant certifications input field */}
            <h5>Relevant Certifications (if applicable)</h5>
            <input
              type="text"
              id="certifications"
              placeholder="List all relevant Certifications"
              value={formData.certifications}
              onChange={handleChange}
            />

            {/* Relevant awards and achievements input field */}
            <h5>Relevant Awards and Achievements (if applicable)</h5>
            <input
              type="text"
              id="awards"
              placeholder="List all relevant Awards and Achievements"
              value={formData.awards}
              onChange={handleChange}
            />
          </div>

          {/* Personal Interests, Cover Letter section */}
          <div class="form-control">
            <label htmlFor="interest" id="label-education">
              Personal Interests, Cover Letter
            </label>

            {/* Personal interests input field */}
            <h5>Personal Interests</h5>
            <input
              type="text"
              id="interest"
              placeholder="List relevant personal interests"
              value={formData.interests}
              onChange={handleChange}
            />

            {/* Cover letter input field */}
            <h5>Please attach a Cover Letter</h5>
            <input
              type="file"
              id="coverLetter"
              placeholder="List all relevant Certifications"
              value={formData.coverLetter}
              onChange={handleChange}
            />
          </div>

          {/* Position applied and questions/concerns section */}
  

          {/* Submit button */}
          {!prefilled && (
            <button type="submit" value="submit">
              Submit
            </button>
          )}
        </fieldset>
      </form>
    )}
  </div>
);
};

// Export the Apply component
export default Apply;
