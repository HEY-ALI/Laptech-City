// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Who We Are</h1>
      <div className="about-intro">
        <p className="highlight-text">
          At <span className="highlight-text">Laptect City</span>, we're not just a technology store; we are your partners in creating an exceptional digital experience. Our commitment goes beyond selling products – we're dedicated to providing solutions and enhancing your journey in the digital world.
        </p>
      </div>
      <div className="about-list">
        <div className="about-list-item">
          <h3 className="highlight-text">Expert Repairs</h3>
          <p className="about-text">Trust our skilled technicians for meticulous laptop and computer repairs, including advanced chip-level motherboard diagnostics and solutions.</p>
        </div>
        <div className="about-list-item">
          <h3 className="highlight-text">Quality Refurbished Devices</h3>
          <p className="about-text">Discover top-tier refurbished laptops and desktops at affordable prices, ensuring performance and reliability.</p>
        </div>
        <div className="about-list-item">
          <h3 className="highlight-text">Comprehensive Accessories</h3>
          <p className="about-text">Explore a curated selection of accessories, designed to complement and elevate your laptop and desktop experience.</p>
        </div>
        <div className="about-list-item">
          <h3 className="highlight-text">Customer-Centric Approach</h3>
          <p className="about-text">Our mission is to provide top-notch customer service, offering personalized solutions tailored to your unique needs.</p>
        </div>
      </div>
      <p className="about-text signature-text">
        Join us at <span className="highlight-text">Laptect City</span> – where technology meets innovation, and your digital aspirations come to life.
      </p>
    </div>
  );
};

export default AboutUs;
