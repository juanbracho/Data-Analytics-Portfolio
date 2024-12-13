// src/components/Header.js
import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__info">
          <h1>Juan Bracho Avila</h1>
          <p>Data Analytics Portfolio - Showcasing Bootcamp Projects & Assignments</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
