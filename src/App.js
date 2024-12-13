// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AssignmentsCarousel from './components/AssignmentsCarousel';
import ProjectsCarousel from './components/ProjectsCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Ensure this line is included */}
      <main>
        <Hero />
        <AssignmentsCarousel />
        <ProjectsCarousel />
      </main>
    </div>
  );
}

export default App;
