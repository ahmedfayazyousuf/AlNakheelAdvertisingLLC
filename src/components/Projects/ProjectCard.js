import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="overlay">
        <h3 className="project-title">{title}</h3>
        <a href={link} className="project-link">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
