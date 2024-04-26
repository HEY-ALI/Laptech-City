// src/components/Products.js
import React from 'react';
import '../styles/Products.css';

const Products = () => {
  
  const products = [
    { id: 1, name: 'HP Elitebook 840 G5', image: '/images/product/840g5.jpg'},
    { id: 2, name: 'Dell Latitude 5400', image: '/images/product/lat5400.jpg'},
    { id: 3, name: 'HP Elitebook 745 G4', image: '/images/product/745g4.jpg'},
    { id: 4, name: 'HP Elitebook 820 G4', image: '/images/product/820g4.jpg'},
    { id: 5, name: 'HP Elitebook 820 G1', image: '/images/product/820g1.jpg'},
    { id: 6, name: 'HP Elitebook 840 G1', image: '/images/product/840g1.jpg'},
    { id: 7, name: 'HP Elitebook 8750w Workstation', image: '/images/product/8750w.jpg'},
    { id: 7, name: 'HP 240 G7', image: '/images/product/240g7.png'}
    
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
