// Create a simple carousel for Assignments
import React, { useRef, useEffect, useState } from 'react';
import './AssignmentsCarousel.css';

const assignments = [
  { name: 'Excel', thumbnail: require('../assets/thumbnails/excel.png'), github: 'https://github.com/juanbracho/UT_Module1' },
  { name: 'VBA', thumbnail: require('../assets/thumbnails/vba.png'), github: 'https://github.com/juanbracho/UT_Module2' },
  { name: 'Python', thumbnail: require('../assets/thumbnails/python.png'), github: 'https://github.com/juanbracho/UT_Module3' },
  { name: 'Data Analysis w/ Python', thumbnail: require('../assets/thumbnails/data-analysis.png'), github: 'https://github.com/juanbracho/UT_Module4' },
  { name: 'Data Visualization w/ Python', thumbnail: require('../assets/thumbnails/data-visualization.png'), github: 'https://github.com/juanbracho/UT_Module5' },
  { name: 'Python APIs', thumbnail: require('../assets/thumbnails/python-apis.png'), github: 'https://github.com/juanbracho/UT_Module6' },
  { name: 'SQL', thumbnail: require('../assets/thumbnails/sql.png'), github: 'https://github.com/juanbracho/UT_Module9' },
  { name: 'Advanced SQL', thumbnail: require('../assets/thumbnails/advanced-sql.png'), github: 'https://github.com/juanbracho/UT_Module10' },
  { name: 'Data Collection', thumbnail: require('../assets/thumbnails/data-collection.png'), github: 'https://github.com/juanbracho/UT_Module11' },
  { name: 'NoSQL Databases', thumbnail: require('../assets/thumbnails/nosql.png'), github: 'https://github.com/juanbracho/UT_Module12' },
  { name: 'Interactive Visualizations', thumbnail: require('../assets/thumbnails/interactive-visualizations.png'), github: 'https://github.com/juanbracho/UT_Module14' },
  { name: 'Mapping', thumbnail: require('../assets/thumbnails/mapping.png'), github: 'https://github.com/juanbracho/UT_Module15' },
  { name: 'Tableau', thumbnail: require('../assets/thumbnails/tableau.png'), github: 'https://github.com/juanbracho/UT_Module18' },
  { name: 'Unsupervised Learning', thumbnail: require('../assets/thumbnails/unsupervised-learning.png'), github: 'https://github.com/juanbracho/UT_Module19' },
  { name: 'Supervised Learning', thumbnail: require('../assets/thumbnails/supervised-learning.png'), github: 'https://github.com/juanbracho/UT_Module20' },
  { name: 'Neural Networks and Deep Learning', thumbnail: require('../assets/thumbnails/neural-networks.png'), github: 'https://github.com/juanbracho/UT_Module21' },
  { name: 'Big Data', thumbnail: require('../assets/thumbnails/big-data.png'), github: 'https://github.com/juanbracho/UT_Module22' },
];

const AssignmentsCarousel = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0;
      updateScrollButtons();
    }
  }, []);

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const buffer = 5; // Adjustable for visibility

    setCanScrollLeft(scrollLeft > buffer);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - buffer);
  };

  const scrollLeft = () => {
    if (canScrollLeft) {
      carouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 200);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
      setTimeout(updateScrollButtons, 200);
    }
  };

  const handleDrag = (e) => {
    let startX = e.clientX;
    let initialScrollLeft = carouselRef.current.scrollLeft;

    const mouseMove = (e) => {
      const dx = e.clientX - startX;
      carouselRef.current.scrollLeft = initialScrollLeft - dx;
    };

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      updateScrollButtons();
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  };

  return (
    <section className="assignments-carousel">
      <h2>Assignments</h2>
      <div
        className="assignments-carousel__container"
        ref={carouselRef}
        onMouseDown={handleDrag}
      >
        {assignments.map((assignment, index) => (
          <div key={index} className="assignments-carousel__item">
            <img
              src={assignment.thumbnail}
              alt={`${assignment.name} thumbnail`}
              className="assignments-carousel__thumbnail"
              onClick={() => window.open(assignment.github, '_blank')}
            />
            <p>{assignment.name}</p>
          </div>
        ))}
      </div>
      {canScrollLeft && <div className="scroll-button left" onMouseEnter={scrollLeft} />}
      {canScrollRight && <div className="scroll-button right" onMouseEnter={scrollRight} />}
    </section>
  );
};

export default AssignmentsCarousel;