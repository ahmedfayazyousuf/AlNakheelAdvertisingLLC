import React from 'react';
import './Services.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div class="front">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div class="back">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
