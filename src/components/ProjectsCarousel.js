// src/components/ProjectsCarousel.js
import React from 'react';
import './ProjectCarousel.css';

const projects = [
  { name: 'Stock Analysis with Python', thumbnail: require('../assets/thumbnails/stock-analysis.png'), github: 'https://github.com/juanbracho/UT_Module7' },
  { name: 'ETL Project', thumbnail: require('../assets/thumbnails/etl-project.png'), github: 'https://github.com/juanbracho/UT_Module13' },
  { name: 'Data Visualization with Python', thumbnail: require('../assets/thumbnails/data-visualization-track.png'), github: 'https://github.com/juanbracho/UT_Module16' },
  { name: 'ML Stock Prediction Models', thumbnail: require('../assets/thumbnails/capstone-project.png'), github: 'https://github.com/juanbracho/UT_Module23' }
];

const ProjectsCarousel = () => {
  return (
    <section className="projects-carousel">
      <h2>Projects</h2>
      <div className="projects-carousel__container">
        {projects.map((project, index) => (
          <div key={index} className="projects-carousel__item">
            <img
              src={project.thumbnail}
              alt={`${project.name} thumbnail`}
              className="projects-carousel__thumbnail"
              onClick={() => window.open(project.github, '_blank')}
            />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;