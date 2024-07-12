import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';
import ProjectsData from './ProjectsData'; 

const ProjectsPage = ({ projects = ProjectsData }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', backgroundColor: 'black', flexDirection: 'column', backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
      <div className="hero-section"> 
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title outlined-text" style={{ color: 'transparent' }}>Projects</h1>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexWrap: 'wrap', paddingBottom: '200px' }}>
        {projects.map((project) => (
          <Link to={`/project/${project.slug}`} key={project.slug} style={{ textDecoration: 'none' }}>
            <div className="blogcard">
              <img src={project.mainImage} className="blogcard-img-top" alt={project.title} />
              <div>
                <h1 className="blogcard-title">{project.title}</h1>
                <p className="blogcard-date">{project.date}</p>
                <p className="blogcard-by">{project.by}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
