import React from 'react';
import '../styles/Home.css';
import VideoCard from './VideoCard'; // Import the VideoCard component

const Home = () => {
  const videoData = [
    { src: 'images/videos/vid.mp4', title: '' },
    { src: 'images/videos/vid2.mp4', title: '' },
    { src: 'images/videos/vid3.mp4', title: '' },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <p>WELCOME TO</p>
        <h1>LAPTECH CITY</h1>
        <p><b>A Refurbished Laptop Hub and Services</b></p>
      </div>
      <div className="image-section">
        <img
          src="/images/site/hero.png"
          alt="Computer Repair and Accessories"
          className="hero-image"
        />
      </div>
      <div className="video-section">
        {/* Add the VideoCard components here */}
        {videoData.map((video) => (
          <VideoCard key={video.src} {...video} />
        ))}
      </div>
      <div className="slogan-section">
        <h2>Top Quality Products, Affordable Prices</h2>
        <p>Explore our range of new and refurbished laptops. We buy, sell, and repair computers.</p>
      </div>
    </div>
  );
};

export default Home;
