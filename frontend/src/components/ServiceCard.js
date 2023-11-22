// src/components/ServiceCard.js
import React, { useState } from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ image, title, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="service-card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      {showFullContent ? (
        <p className="card-content">{content}</p>
      ) : (
        <p className="card-content">{content.slice(0, 100)}...</p>
      )}
      <button onClick={toggleContent} className="read-more-button">
        {showFullContent ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ServiceCard;
