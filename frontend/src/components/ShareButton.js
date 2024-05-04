// ShareButton.js

import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: 'Check out Laptech City - A Refurbished Laptop Hub and Services!',
          url: window.location.href
        });
      } else {
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;
