// Set up the file structure
import React from 'react';
import profilePic from './header.png';
import './Hero.css'


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={profilePic} alt="Juan Bracho Avila" />
      </div>
      <div className="hero__about">
        <h1>About Me</h1>
        <p>
          I am a data analyst passionate about extracting insights from data, 
          with experience in Python, SQL, and data visualization tools.
          I am completing a Data Analytics Bootcamp and this portfolio showcases the work done during this course. Even thought React was not part of this Bootcamp, with the help of YouTube and ChatGPT I have prepare this website for you see what we cover in the Bootcamp and the different challenges that we had to complete.
        </p>
        <span>LinkedIn: <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/">Juan Bracho Avila</a></span>
      </div>
    </section>
  );
};

export default Hero;
