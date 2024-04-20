import React from 'react';
import { NavLink } from 'react-router-dom';

const FlexiWork = () => (
  <>
    <div className="background-container-flexible-work"></div>

    <section2 className="diversity-content">
      <img src="main-images/flexiblework1.jpg" className="FlexImage" />

      <section>
        <h3>Remote Work Opportunities:</h3>
        <p>
          Experience the freedom to work from the comfort of your home or any
          location of your choice.
        </p>
        <p>
          Our robust remote work program is designed to keep you connected and
          productive, no matter where you are in the world.
        </p>
      </section>

      <section2>
        <h3>Flexible Schedules:</h3>
        <p>
          Tailor your work hours to align with your life outside of the office.{' '}
        </p>
        <p>
          Our flexible scheduling options allow you to optimize your
          productivity while accommodating personal commitments and priorities.
        </p>
      </section2>

      <img src="main-images/flexiblework2.jpg" className="FlexImage" />

      <img src="main-images/flexiblework3.jpg" className="FlexImage" />

      <section>
        <h3>Work-Life Integration:</h3>
        <p>We believe in the seamless integration of work and life. </p>
        <p>
          Our approach fosters an environment where you can excel in your career
          while enjoying a fulfilling personal life, creating a harmonious
          balance.
        </p>
      </section>

      <section2>
        <h3>Digital Nomad Program:</h3>
        <p>
          For the adventurous spirits among us, our Digital Nomad Program lets
          you explore new destinations while continuing your impactful work.
        </p>
        <p>
          Immerse yourself in diverse cultures and experiences, all while
          contributing to the success of More Travel.
        </p>
      </section2>

      <img src="main-images/flexiblework4.jpg" className="FlexImage" />

      <img src="main-images/flexiblework5.jpg" className="FlexImage" />

      <section>
        <h3>Wellness Initiatives:</h3>
        <p>Your well-being matters.</p>
        <p>
          Discover wellness initiatives that support your physical and mental
          health.
        </p>
        <p>
          From fitness programs to mental health resources, we invest in your
          overall well-being.
        </p>
      </section>

      <section2>
        <h3>Employee Testimonials:</h3>
        <p>
          Hear directly from our team members about their experiences with
          flexible work arrangements.
        </p>
        <p>
          Learn how flexibility has positively influenced their work, personal
          life, and overall job satisfaction.
        </p>
        <NavLink to="testimonies" className="cta-button">
          Learn more about testimonies
        </NavLink>
      </section2>

      <img src="main-images/flexiblework6.jpg" className="FlexImage" />
    </section2>
  </>
);

export default FlexiWork;
