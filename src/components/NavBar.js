import React from 'react';
import '../styles.css';
// import '../toggle.js';

const NavBar = () => {
  return (
    <header>
  <nav className="navbar">
    <div className="logo">Shreyansh</div>
    {/* <button className="navbar-toggle" aria-label="Toggle navigation">
      <span className="navbar-toggle-icon"></span>
    </button> */}
    <ul className="nav-list">
      {/* <li><a href="#home">Home</a></li> */}
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>



  );
};

export default NavBar;
