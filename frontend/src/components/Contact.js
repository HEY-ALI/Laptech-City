import React from 'react';
import MapComponent from './MapComponent';
import ContactForm from './ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="heading">Contact Us</h1>
      <div className="upper-section">
        <div className="contact-info">
          <h3>Our Offices</h3>
          <ul>
            <li>
              <strong>Main Office:</strong>
              <br />
              Shop No. 72B, HUDA Market Sector-29, Faridabad, Haryana 121008
            </li>
            <li>
              <strong>[Second Office Name]:</strong>
              <br />
              [Second Office Address] (Optional: Include phone number if available)
            </li>
          </ul>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <ul>
            <li>
              <strong>Gmail:</strong>
              <a href="mailto:laptechcity@gmail.com">laptechcity@gmail.com</a>
            </li>
            <li>
              <strong>Phone No.:</strong> +918860742009
            </li>
            <li>
              <strong>Fax:</strong> (Optional: Add fax number if applicable)
            </li>
            <li>
              <strong>Social Media:</strong>
              <ul className="social-links">
                <li>
                  <a href="[Facebook URL]">
                    <i className="fa fa-facebook" aria-label="Facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="[Twitter URL]">
                    <i className="fa fa-twitter" aria-label="Twitter"></i>
                  </a>
                </li>
                {/* Add links for other social media platforms as needed */}
              </ul>
            </li>
            <li>
              <strong>Website:</strong> (Optional: Add your website URL if applicable)
              <a href="[Your Website URL]">[Your Website Name]</a>
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
