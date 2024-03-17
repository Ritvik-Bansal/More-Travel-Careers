import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { isLoggedIn, getUser } from './utils';
import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

const Apply = ({ prefilled = false }) => {
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
  const navigate = useNavigate();


  const param = useParams();
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

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  if (prefilled && !formData) {
    return <h1>No data found for this application</h1>;
  }

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
      alert("Something went wrong, please try again")
    }
  }

  return (
    <div>
      <div class="background-container-application"></div>

      {!isLoggedIn() ? (
        <h2>Please login to apply.</h2>
      ) : (
        <form id="form" onSubmit={onSubmit}>
          <fieldset disabled={prefilled} style={{ border: 'none' }}>
            <div class="form-control">
              <label
                htmlFor="Contact Information"
                id="label-contact-information"
              >
                Contact Information
              </label>

              <h5>Name:</h5>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              <h5>Address:</h5>
              <input
                type="text"
                id="address"
                placeholder="Enter your home address"
                value={formData.address}
                onChange={handleChange}
              />

              <h5>E-mail:</h5>
              <input
                type="email"
                id="email"
                placeholder="Enter your e-mail address"
                value={formData.email}
                onChange={handleChange}
              />

              <h5>Phone-Number:</h5>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div class="form-control">
              <label
                htmlFor="objective statement"
                id="label-objective-statement"
              >
                Objective Statement
              </label>

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

            <div class="form-control">
              <label
                htmlFor="professional summary"
                id="label-professional-summary"
              >
                Professional Summary
              </label>

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

            <div class="form-control">
              <label htmlFor="education" id="label-education">
                Education
              </label>

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

              <h5>Degree earned in education</h5>
              <input
                type="text"
                id="degree"
                placeholder="Your Degree, e.g., Bachelor of Arts in Tourism Management"
                value={formData.degree}
                onChange={handleChange}
              />

              <h5>Institution</h5>
              <input
                type="text"
                id="institution"
                placeholder="Name of University of College"
                value={formData.institution}
                onChange={handleChange}
              />

              <h5>Graduation Date</h5>
              <input
                type="text"
                id="date"
                placeholder="Year of Graduation"
                value={formData.date}
                onChange={handleChange}
              />

              <h5>Relevant Coursework (if applicable)</h5>
              <input
                type="text"
                id="coursework"
                placeholder="List any specific coursework relevant to the position, e.g., Travel Planning, Customer Service in Hospitality"
                value={formData.coursework}
                onChange={handleChange}
              />
            </div>

            <div class="form-control">
              <label htmlFor="skills" id="label-education">
                Skills, Certifications, Awards, Achievements
              </label>

              <h5>Relevant Skills (if applicable)</h5>
              <input
                type="text"
                id="skills"
                placeholder="List all relevant skills"
                value={formData.skills}
                onChange={handleChange}
              />

              <h5>Relevant Certifications (if applicable)</h5>
              <input
                type="text"
                id="certifications"
                placeholder="List all relevant Certifications"
                value={formData.certifications}
                onChange={handleChange}
              />

              <h5>Relevant Awards and Achievements (if applicable)</h5>
              <input
                type="text"
                id="awards"
                placeholder="List all relevant Awards and Achievements"
                value={formData.awards}
                onChange={handleChange}
              />
            </div>

            <div class="form-control">
              <label htmlFor="interest" id="label-education">
                Personal Interests, Cover Letter
              </label>

              <h5>Personal Interests</h5>
              <input
                type="text"
                id="interest"
                placeholder="List relevant personal interests"
                value={formData.interests}
                onChange={handleChange}
              />

              <h5>Please attach a Cover Letter</h5>
              <input
                type="file"
                id="coverLetter"
                placeholder="List all relevant Certifications"
                value={formData.coverLetter}
                onChange={handleChange}
              />
            </div>

            <div class="form-control">
              <label>What position are you applying to?</label>
              <label htmlFor="recommed-1">
                <input type="radio" id="recommed-1" name="recommed" />
                Travel Consultant
              </label>
              <label htmlFor="recommed-2">
                <input type="radio" id="recommed-2" name="recommed" />
                Customer Service Representative
              </label>
              <label htmlFor="recommed-3">
                <input type="radio" id="recommed-3" name="recommed" />
                Sales Representative
              </label>
              <label htmlFor="recommed-4">
                <input type="radio" id="recommed-4" name="recommed" />
                Travel Coordinator
              </label>
              <label htmlFor="recommed-5">
                <input type="radio" id="recommed-5" name="recommed" />
                Digital Marketing Specialist
              </label>
              <label htmlFor="recommed-6">
                <input type="radio" id="recommed-6" name="recommed" />
                Technology and Systems Manager
              </label>
              <label htmlFor="recommed-7">
                <input type="radio" id="recommed-7" name="recommed" />
                Corporate Travel Consultant
              </label>
            </div>
            <div class="form-control">
              <label htmlFor="comment">Questions/Concerns</label>

              <textarea
                name="questions"
                id="questions"
                placeholder="Enter your questions here"
                value={formData.questions}
                onChange={handleChange}
              ></textarea>
            </div>

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

export default Apply;
