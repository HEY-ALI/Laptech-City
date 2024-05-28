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
        <img src="images/navlogo.jpg" alt="Brand Logo" />
      </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/products">Products</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <div className="menu-item">
          <button
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1.2rem',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#ecf0f1',
              cursor: 'pointer'
            }}
            onClick={() => {
              const apkUrl = 'https://www.laptechcity.com/download';
              window.open(apkUrl); // Open download link in new tab
            }}
          >
            Download App
          </button>
        </div>
        <div className="menu-item">
          <ShareButton />
        </div>
        <div className="menu-item">
          <a href="/admin/login">Admin Login</a>
        </div>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
