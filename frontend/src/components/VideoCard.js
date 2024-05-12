import React from 'react';
import '../styles/VideoCard.css';

const VideoCard = ({ src, title, muted = true, loop = true }) => {
  return (
    <div className="video-card">
      <video src={src} autoPlay muted={muted} loop={loop} controls>
        Your browser does not support the video tag.
      </video>
      <div className="video-card-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
