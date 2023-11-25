import React from 'react';
import '../styles/AppDownload.css';

const AppDownloadPage = () => {
  const handleDownload = () => {
    // You can add logic here for any additional actions before the download
    // For now, just redirecting to the APK file for download
    window.location.href = '/app/base.apk';
  };

  return (
    <div className="app-download-container">
      <h2>Download Our App</h2>
      <p>Get the latest version of our app for the best experience.</p>
      <button onClick={handleDownload}>Download Now</button>
    </div>
  );
};

export default AppDownloadPage;
