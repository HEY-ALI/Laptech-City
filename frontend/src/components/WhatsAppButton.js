// WhatsAppButton.js
import React from 'react';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleButtonClick = () => {

    window.open('https://wa.me/+918860742009', '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleButtonClick}>
      <img src="/images/whatsapp.png" alt="WhatsApp Icon" />
    </div>
  );
};

export default WhatsAppButton;
