// src/components/Home.js
import React from 'react';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <p>WELCOME TO</p>
        <h1>LAPTECH CITY</h1>
        <p>Your One-Stop Solution for Computer Repair, Sales, and Accessories</p>
      </div>
      <div className="image-section">
        <img
          src="/images/site/hero.png"
          alt="Computer Repair and Accessories"
          className="hero-image"
        />
      </div>
      <div className="slogan-section">
        <h2>Quality Repairs, Affordable Prices</h2>
        <p>Explore our range of new and refurbished laptops. We buy, sell, and repair computers.</p>
      </div>
    </div>
    
    
  );
};

export default Home;
