import React from 'react';
import '../styles/Products.css';
import ProductCard from './ProductCard'; // Import from the same folder (components)
import products from '../products'; // Import product data from one level above (src)

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Our Products</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
