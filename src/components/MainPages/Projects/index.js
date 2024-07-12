import Cover2 from '../../1_MediaAssets/BrandAssets/TextureTriangle.png'
import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';
import ProjectsData from './ProjectsData'; 
import Footer from '../../Constants/Footer';

const ProjectsPage = ({ projects = ProjectsData }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', backgroundColor: 'black', flexDirection: 'column', backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
      
      <div className="hero-section" style={{background:'rgba(19,0,36,0.6)', backgroundImage:`url('${Cover2}')`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed'}}> 
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title outlined-text" style={{ color: 'transparent' }}>Projects</h1>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexWrap: 'wrap', padding: '20px 0px' }}>
        {projects.map((project) => (
          <Link to={`/project/${project.slug}`} key={project.slug} style={{ textDecoration: 'none' }}>
            <div className="blogcard">
              <img src={project.mainImage} className="blogcard-img-top" alt={project.title} />
              <div>
                <p className="blogcard-date">{project.date} | {project.by}</p>
                <h1 className="blogcard-title">{project.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
