import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/Projects';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <div className="project-hero">
        <h1>{project.title}</h1>
        <img src={project.mainImage} alt={project.title} className="project-main-image" />
      </div>
      {project.description.map((desc, index) => (
        <div key={index} className="project-description-section">
          <p>{desc.paragraph}</p>
          <img src={desc.image} alt={project.title} className="project-description-image" />
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;
