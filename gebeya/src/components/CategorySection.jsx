import React from "react";
import "./CategorySection.css"; // CSS file for styling

// Card Component
const CollectionCard = ({ category, name, brand, price, rating }) => {
  return (
    <div className="collection-card">
      <div className="card-header">
        <span className="category">{category}</span>
        <span className="stock-status">In Stock</span>
      </div>
      <div className="card-image">
        {/* Placeholder Image, replace with your image URLs */}
        <img
          src="https://via.placeholder.com/150"
          alt={name}
        />
      </div>
      <div className="card-content">
        <h3 className="product-name">{name}</h3>
        <p className="brand">{brand}</p>
        <div className="rating">⭐ {rating}k+ rating</div>
        <div className="price">${price}</div>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

// Category Section
const CategorySection = () => {
  const products = [
    {
      category: "Women",
      name: "French Kiss Bag",
      brand: "ALDO",
      price: 500,
      rating: 2,
    },
    {
      category: "Kids",
      name: "Burberry shine",
      brand: "FENDI",
      price: 150,
      rating: 1,
    },
    {
      category: "Women",
      name: "Alvero Gown",
      brand: "DIVINE",
      price: 300,
      rating: 5,
    },
  ];

  return (
    <div className="category-section">
      <h2 className="section-title">Latest Collections</h2>
      <div className="collection-cards">
        {products.map((product, index) => (
          <CollectionCard key={index} {...product} />
        ))}
      </div>
      <div className="categories">
        {["Men", "Women", "Kids", "Perfumes", "Sport", "Jewelry"].map(
          (category, index) => (
            <button
              key={index}
              className={`category-button ${
                category === "Women" ? "active" : ""
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="subcategories">
        {[
          "Shoes",
          "Bags",
          "Jackets",
          "Lingerie",
          "Belts",
          "Street wear",
        ].map((sub, index) => (
          <div key={index} className="subcategory-card">
            <p>{sub}</p>
            <span>See all collections</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
