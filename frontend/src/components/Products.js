// src/components/Products.js
import React from 'react';
import '../styles/Products.css';

const Products = () => {
  
  const products = [
    { id: 1, name: 'Product 1', image: 'url-to-image-1.jpg' },
    { id: 2, name: 'Product 2', image: 'url-to-image-2.jpg' },
    { id: 3, name: 'Product 3', image: 'url-to-image-3.jpg' },
    { id: 4, name: 'Product 4', image: 'url-to-image-4.jpg' },
    { id: 5, name: 'Product 5', image: 'url-to-image-5.jpg' },
    { id: 6, name: 'Product 6', image: 'url-to-image-6.jpg' },
    { id: 7, name: 'Product 7', image: 'url-to-image-7.jpg' },
    
  ];

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Our Products</h2>
        <p>
           Explore our full product catalog{' '}
          <a href="https://wa.me/c/918860742009" target="_blank" rel="noopener noreferrer">
            Click here
          </a>
        </p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
