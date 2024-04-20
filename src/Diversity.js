import React from 'react';
import { NavLink } from 'react-router-dom';

const Diversity = () => (
  <>
    <div className="background-container-diversity"></div>

    <section2 className="diversity-content">
      <section>
        <h3>Our Diversity & Inclusion Vision</h3>
        <p>
          Our vision is to create a workplace and travel experiences where every
          individual, regardless of background or identity, feels valued, heard,
          and included. We aspire to be a global leader in fostering diversity,
          equity, and inclusion.
        </p>
      </section>

      <img src="main-images/diversity1.jpg" className="DiversityImage" />

      <img src="main-images/diversity2.jpg" className="DiversityImage" />

      <section2>
        <h3>Our Mission</h3>
        <p>
          More Travel is dedicated to fostering a workplace and travel
          experiences that embrace diversity and inclusion. We believe that a
          diverse team brings unique perspectives, driving innovation and
          excellence in everything we undertake.
        </p>
      </section2>

      <section>
        <h3>Our Team's Stories</h3>
        <p>
          Meet the extraordinary individuals who make up our team. Explore their
          diverse backgrounds, experiences, and the unique perspectives they
          bring to our agency. Our team is a mosaic of cultures, talents, and
          stories that enrich our collaborative spirit.
        </p>
      </section>

      <img src="main-images/diversity3.jpg" className="DiversityImage" />

      <img src="main-images/diversity4.jpg" className="DiversityImage" />

      <section2>
        <h3>Inclusive Policies</h3>
        <p>
          Our inclusive policies reflect our commitment to fairness, equal
          opportunities, and respect for all team members. From recruitment to
          promotions, we strive to create an environment where diversity is not
          just valued but celebrated.
        </p>
      </section2>

      <section>
        <h3>Employee Resource Groups</h3>
        <p>
          Discover our vibrant Employee Resource Groups (ERGs) that provide a
          supportive community for team members with shared interests,
          backgrounds, and experiences. These groups play a vital role in
          fostering inclusion, understanding, and a sense of belonging.
        </p>
      </section>

      <img src="main-images/diversity5.jpg" className="DiversityImage" />

      <img src="main-images/diversity6.jpg" className="DiversityImage" />

      <section2>
        <h3>Community Impact</h3>
        <p>
          Learn about our initiatives to make a positive impact on the
          communities we serve. From charitable partnerships to sustainable
          tourism practices, we believe in contributing to social change and
          creating opportunities for diverse populations.
        </p>
      </section2>

      <section>
        <h3>Join Us on this Journey</h3>
        <p>
          We invite you to be a part of our diverse community. Explore career
          opportunities, share your thoughts, and join us in creating a travel
          agency that celebrates differences, fosters inclusivity, and brings
          people together.
        </p>

        <NavLink to="job-openings" className="cta-button">
          Explore Job Openings
        </NavLink>
      </section>

      <img src="main-images/diversity7.jpg" className="DiversityImage" />
    </section2>
  </>
);

export default Diversity;
