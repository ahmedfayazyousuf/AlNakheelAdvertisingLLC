import React from 'react';
import './ProjectCard.css';
import gridbg from './../Projects/gridbg.jpeg';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${gridbg})` }}>
      <h1 className="hero-title">PROJECTS</h1>
    </div>
  );
};

export default Hero;
