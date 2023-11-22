




// Contact.js
import React from 'react';
import MapComponent from './MapComponent';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="heading"> Contact Us</h1>
      <div className="upper-section">
        <div className="contact-info">
          <h3>Office</h3>
          <p>
            Shop No.72 Basement, HUDA Market Sector-29,Old Faridabad, Haryana 121002
          </p>
        </div>

        <div className="contact-details">
          <h3>Contact Details</h3>
          <ul>
            <li>
              <strong>Gmail:</strong> laptechcity@gmail.com
            </li>
            <li>
              <strong>Phone No.  :</strong> +918860742009
            </li>
          </ul>
        </div>
      </div>

      

      

      <div className="map-container">
        <MapComponent />
      </div>

      <div className="contact-form">
        <h3>Connect With Us</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;