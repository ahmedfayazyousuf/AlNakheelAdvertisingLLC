import React from 'react';
import './Services.css';
import servicespagebg from './../Services/PurpleBanner.jpg'

const HeroServices = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${servicespagebg})`, backgroundAttachment: 'fixed' }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title outlined-text">Our Services</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroServices;