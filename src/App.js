import React from 'react';
import NavBar from './components/NavBar';
import Experience from './components/experience';
import Skills from './components/skills';
import Home from './components/home';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import './styles.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
