import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Shreyansh Dubey. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="www.linkedin.com/in/shreyansh-dubey-4647222a7">LinkedIn</a>
          <a href="https://twitter.com/yourusername">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
