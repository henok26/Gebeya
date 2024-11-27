import React from "react";
import "./ProductCard.css"; // Add styles here

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="buy-button">Buy</button>
    </div>
  );
};

export default ProductCard;
