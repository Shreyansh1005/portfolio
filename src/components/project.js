import React from 'react';
import '../styles.css';

const Projects = () => {
  return (
    <section id="projects" className="projects container">
  <h2>My Projects</h2>
  <div className="project result-management">
    <h3>Result Management System</h3>
    <p>
      Developed a comprehensive Result Management System using the MERN stack during my internship at Zidio Development. 
      This project included features such as login and registration for students and admins, an admin dashboard for 
      managing student results, and functionality for exporting results as PDFs. I also implemented dynamic updating of 
      student marks and integrated various functionalities for calculating grades and CGPA.
    </p>
  </div>
  <div className="project ai-agriculture">
    <h3>AI in Agriculture</h3>
    <p>
      Created an AI-based application for agriculture to assist farmers in predicting crop yields and managing resources 
      more efficiently. The project involved developing a Flask application with a predictive model loaded from a .pkl file. 
      Features included data input for predictions, result visualization, and recommendations based on predictive analytics.
    </p>
  </div>
  <div className="project news-dekh">
    <h3>NewsDekh MERN Application</h3>
    <p>
      Developed NewsDekh, a dynamic web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver
      the latest news from various categories. Users can browse and search news articles based on different topics and interests.
      Key features of the application include a user-friendly interface, real-time news updates, and responsive design for 
      optimal viewing on various devices. Integrated with an external news API to fetch and display up-to-date news content.
    </p>
  </div>
</section>


  );
};

export default Projects;
