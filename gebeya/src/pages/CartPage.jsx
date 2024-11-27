import React, { useState } from 'react';
import Footer from '../components/Footer';
import './CartPage.css';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('Black');

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="cart-page">
      {/* Header Section */}
      <header className="header">
        <Navbar/>
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="#">Home</a>  <a href="#">Kids</a> > <a href="#">Shoes</a> > Sneakers
      </div>

      {/* Product Details */}
      <div className="product-details">
        <div className="product-image">
          <img src="burberry_shine_sneakers.jpg" alt="Burberry Shine Sneakers" />
        </div>
        <div className="product-info">
          <h1>Burberry Shine Sneakers</h1>
          <p className="brand">Brand: Fendi</p>
          <p className="price">
            <span className="discounted-price">$150</span>
            <span className="original-price">$300</span>
            <span className="discount">50% Off</span>
          </p>
          <p>Stock Availability: <span className="stock">50 units left</span></p>
          <p>Shipping: Shipping fee may vary on location</p>
          <p className="rating">Rating: 4.5 stars</p>

          {/* Quantity and Size Selector */}
          <div className="selectors">
            <div className="quantity-selector">
              <button onClick={decreaseQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increaseQuantity}>+</button>
            </div>

            <div className="size-selector">
              <label>Size: </label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="color-selector">
              <label>Color: </label>
              <div className="color-options">
                <div className="color-swatch" style={{ backgroundColor: 'black' }} onClick={() => setColor('Black')}></div>
                <div className="color-swatch" style={{ backgroundColor: 'white' }} onClick={() => setColor('White')}></div>
                <div className="color-swatch" style={{ backgroundColor: 'red' }} onClick={() => setColor('Red')}></div>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="social-sharing">
            <button>Share on Instagram</button>
            <button>Share on Twitter</button>
            <button>Share on WhatsApp</button>
          </div>

          {/* Product Actions */}
          <div className="product-actions">
            <button className="save-for-later">Save for later</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Delivery & Returns */}
      <div className="delivery-returns">
        <div className="location-selector">
          <label>Select your location:</label>
          <select>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
            {/* Add more locations */}
          </select>
        </div>
        <div className="delivery-info">
          <p>Estimated delivery: 1-12 business days</p>
          <p>Same-day delivery available if ordered before 3 PM</p>
          <p>Availability may vary based on location</p>
        </div>
        <div className="return-policy">
          <p>Return Policy: 7-day guarantee return</p>
          <a href="#">Learn more about returns</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
