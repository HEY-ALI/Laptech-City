import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-content">
          <div className="grid">
            <div>
              <h3>Branch 1 Office</h3>
              <p>357A, Bhoor Colony Main Badhkal Road, Opposite Sector 29, Old Faridabad, Haryana 121002</p>
            </div>
            
            <div>
              <h3>Contact Us</h3>
              <p>Email: laptechcity@gmail.com</p>
              <p>Phone: (+91) 8860742009</p>
              <p>WhatsApp: (+91) 8860742009</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/iitfagroup/"><FaFacebookF /></a>
                <a href="https://www.instagram.com/laptech_city/"><FaInstagram /></a>
                <a href="https://twitter.com/laptechcity"><FaTwitter /></a>
                <a href="https://www.youtube.com/channel/UCFsT9AQGyOXLLNNjhyUW-Kw?app=desktop"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section footer-copyright">
        <div>
          <p>Copyright © 2024 Laptech City | All Rights Reserved</p>
          <p>Powered by <a href="mailto:arbabali0006@gmail.com">Arbab Ali</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
