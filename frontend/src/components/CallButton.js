// CallButton.js
import React from 'react';
import '../styles/CallButton.css';

const CallButton = () => {
  const handleButtonClick = () => {
    
    window.open('tel:+918860742009');
  };

  return (
    <div className="call-button" onClick={handleButtonClick}>
      <img src="/images/call.png" alt="Call Icon" />
    </div>
  );
};

export default CallButton;
