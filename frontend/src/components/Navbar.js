// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        <img src="images/navlogo.png" alt="Brand Logo" />
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/products">Products</a>
        <a href="/about">About Us</a>
        <a href="/download">Download App</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
