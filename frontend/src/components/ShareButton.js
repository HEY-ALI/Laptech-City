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

  const handleDownload = () => {
    const apkUrl = "https://www.laptechcity.com/download";
    window.open(apkUrl); // Open download link in new tab
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1.2rem',
          border: 'none',
          backgroundColor: 'transparent',
          color: '#ecf0f1',
          cursor: 'pointer',
          marginRight: '10px'
        }}
        onClick={handleDownload}
      >
        Download App
      </button>
      <button
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1.2rem',
          border: 'none',
          backgroundColor: '#3498db',
          color: '#ecf0f1',
          cursor: 'pointer'
        }}
        onClick={handleShare}
      >
        Share
      </button>
    </div>
  );
};

export default ShareButton;
