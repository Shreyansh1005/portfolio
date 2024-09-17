import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <section id="about" className="about container">
  <h2>About Me</h2>
  <div className="about-content">
    <p>
      Hi, I'm <span className="highlight">Shreyansh Dubey</span>, a passionate <span className="highlight">web developer</span> with experience in building dynamic, responsive, and user-friendly web applications. 
      I specialize in the <span className="highlight">MERN stack</span> and have a knack for turning ideas into functional, well-structured solutions. My goal is to constantly evolve, learn, and implement cutting-edge technologies.
    </p>
    <p>
      When I'm not coding, you’ll find me exploring new technologies, experimenting with web design, or contributing to exciting projects.
    </p>
  </div>
</section>

  );
};

export default About;
