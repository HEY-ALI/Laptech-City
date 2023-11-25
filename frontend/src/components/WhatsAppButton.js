// WhatsAppButton.js
import React from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleButtonClick = () => {
    // Replace '123456789' with your actual WhatsApp number
    window.open('https://wa.me/+918860742009', '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleButtonClick}>
      <img src="/images/whatsapp.png" alt="WhatsApp Icon" />
      <span>Chat on WhatsApp</span>
    </div>
  );
};

export default WhatsAppButton;
