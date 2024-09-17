import React from 'react';
import '../styles.css';

const Experience = () => {
  return (
    <section id="experience" className="experience container">
  <h2>Experience</h2>

  <div className="experience-item">
    <h3>Zidio Development - Web Development Intern</h3>
    <span className="experience-duration">July 2024 - Present</span>
    <p>
      Developed a full-featured result management system using the <span className="highlight">MERN stack</span>. Implemented key functionalities like student and admin dashboards, result generation, dynamic form handling, and PDF export.
      Enhanced user experience through advanced animations and a responsive layout.
    </p>
  </div>

  <div className="experience-item">
    <h3>InternPe - Web Developer</h3>
    <span className="experience-duration">May 2023 - June 2023</span>
    <p>
      Worked on various web projects focusing on <span className="highlight">responsive design</span> and <span className="highlight">backend integration</span>. Collaborated with cross-functional teams to deliver highly optimized solutions for the company's internal systems.
    </p>
  </div>
</section>

  );
};

export default Experience;
