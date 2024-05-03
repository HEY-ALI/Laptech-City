import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Assuming styles.css is one level above (src)

const ProductCard = ({ product }) => {
  const whatsappNumber = '8860742009'; // Replace with your WhatsApp number

  const handleQueryClick = () => {
    // Construct the WhatsApp message
    const message = `Hi, I'm interested in the ${product.title}. Here is the link: ${window.location.href}`;

    // Construct the WhatsApp URL with your phone number and pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp chat in a new tab/window
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <button onClick={handleQueryClick}>Query</button>
    </div>
  );
};

export default ProductCard;
