import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <div className="grid">
            <div>
              <h3>Office</h3>
              <p>Shop No. 72B, HUDA Market Sector-29, Faridabad, Haryana, 121008</p>
            </div>
            <div>
              <h3>Business Hours</h3>
              <p>Mon - Sun:  9am - 8pm</p>  
            </div>
            <div>
              <h3>Contact</h3>
              <p>Email: laptechcity@gmail.com</p>
              <p>Phone: (+91)8860742009</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section footer-copyright">
        <div>
          <p>Copyright © 2023 Laptech City | All Rights Reserved</p>
          <p>Powered by <a href="mailto:arbabali0006@gmail.com">Arbab Ali</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
