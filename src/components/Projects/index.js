import React from 'react';
import Hero from './Hero.js';
import './ProjectCard.css';


const ProjectsPage = ({ projects }) => {
  return (
    <div className="projects-page-container">
     <Hero /> 
      <div className="projects-page">
      {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="overlay">
              <div className="project-title">{project.title}</div>
              <a href={`/Projects/${project.id}`} className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
