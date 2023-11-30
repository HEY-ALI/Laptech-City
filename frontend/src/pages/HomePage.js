// src/pages/ContactPage.js
import React from 'react';
import Home from '../components/Home';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';

const HomePage = () => {
  return (
    <div>
      <Home />
      <WhatsAppButton />
      <CallButton />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;
