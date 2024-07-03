import React from 'react';
import ProjectCard from './ProjectCard';
import Hero from './Hero.js';
import './ProjectCard.css';


const Projects = () => {
  const projects = [
    { id: 1, image: ' ', title: 'Project 1', link: '/project1' },
    { id: 2, image: ' ', title: 'Project 2', link: '/project2' },
    { id: 3, image: ' ', title: 'Project 3', link: '/project3' },
    { id: 4, image: ' ', title: 'Project 4', link: '/project4' },
    { id: 5, image: ' ', title: 'Project 5', link: '/project5' },
    { id: 6, image: ' ', title: 'Project 6', link: '/project6' },
    { id: 7, image: ' ', title: 'Project 7', link: '/project7' },
  ];
  return (
    <div className="projects-page-container">
     <Hero /> 
      <div className="projects-page">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
