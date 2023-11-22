// src/pages/ContactPage.js
import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <Home />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;
