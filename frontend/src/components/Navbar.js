import React, { useState } from 'react';
import '../styles/Navbar.css';
import ShareButton from './ShareButton'; // Import ShareButton component

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
        <div className="menu-item-with-share">
          <a href="/contact">Contact</a>
          <div className="share-button-container">
            <ShareButton />
          </div>
        </div>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
