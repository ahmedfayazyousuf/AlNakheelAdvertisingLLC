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
      <section className="project-hero" style={{ backgroundImage: `url(${project.mainImage})`, backgroundAttachment: 'fixed' }}>
        <h1>{project.title}</h1>
      </section>
      <div className="pcontent-container">
        {project.description.map((desc, index) => (
          <div key={index} className="project-description-section" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
            <p>{desc.paragraph}</p>
            <img src={desc.image} alt={project.title} className="project-description-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
