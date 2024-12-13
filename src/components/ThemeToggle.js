// src/components/ThemeToggle.js
import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true); // Set default to dark mode

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="switch"
        className="checkbox"
        onChange={toggleTheme}
        checked={darkMode}
      />
      <label htmlFor="switch" className="label">
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};

export default ThemeToggle;
