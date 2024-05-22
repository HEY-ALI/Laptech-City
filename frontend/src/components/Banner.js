import React from 'react';
import '../styles/Banner.css'; // Import CSS for styling

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="content-container">
                <div className="text-container">
                    <h1>Refurbished Laptops</h1>
                    <p>Super Mega Sale Offer!</p>
                    <p>We're offering four gifts for free with every purchase!</p>
                </div>
                <div className="image-container">
                    <img src="/path/to/your/image.png" alt="Laptop" />
                </div>
            </div>
            <div className="whatsapp-button">
                <a href="https://wa.me/your-whatsapp-number">
                    <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
};

export default Banner;
