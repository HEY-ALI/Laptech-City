import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // Assuming styles.css is one level above (src)

const ProductCard = ({ product }) => {
  const whatsappNumber = '+918860742009'; // Replace with your WhatsApp number

  const getProductImageBase64 = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      return base64Data;
    } catch (error) {
      console.error('Error fetching product image:', error);
      return null;
    }
  };

  const handleQueryClick = async () => {
    try {
      const productImageBase64 = await getProductImageBase64(product.imageUrl);

      const message = `Hi, I'm interested in the ${product.title}. Here is the product image:\n${productImageBase64}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, '_blank');
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    }
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
