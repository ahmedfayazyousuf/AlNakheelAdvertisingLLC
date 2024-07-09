import React from 'react';
import './ProjectCard.css';


const ProjectsPage = ({ projects }) => {
  return (
    <div className="projects-page-container">
      <h1 className='hero-title'>PROJECTS</h1>
      <div className="projects-page">
      {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.mainImage} alt={project.title} className="project-image" />
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
