import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <section id="home" className="hero">
  <div className="hero-content">
    <h1>Welcome to My Portfolio</h1>
    <p>I'm Shreyansh Dubey, a passionate web developer.</p>
    <a href="#contact" className="btn">Contact Me</a>
  </div>
  <div className="hero-image-container">
    <img src="/my image2.jpg" alt="Shreyansh Dubey" className="hero-image"/>
  </div>
  <div className="floating-blocks">
    <div className="floating-block"></div>
    <div className="floating-block"></div>
    <div className="floating-block"></div>
    <div className="floating-block"></div>
    <div className="floating-block"></div>
    <div className="floating-block"></div>
  </div>
</section>

  );
};

export default Home;
