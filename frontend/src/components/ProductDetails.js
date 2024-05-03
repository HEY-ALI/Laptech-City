import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import products from '../products'; // Import product data from two levels above (src)

const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === Number(productId));

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.description}</p>
      {/* Display additional images */}
      <div className="product-gallery">
        {product.images.map((image) => (
          <img key={image} src={image} alt={`${product.title} - Additional Image`} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
