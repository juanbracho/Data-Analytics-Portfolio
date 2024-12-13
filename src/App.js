// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AssignmentsCarousel from './components/AssignmentsCarousel';
import ProjectsCarousel from './components/ProjectsCarousel';
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> {/* Replace HashRouter with BrowserRouter */}
      <div className="App">
        <Header />
        <main>
          <Hero />
          <AssignmentsCarousel />
          <ProjectsCarousel />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;