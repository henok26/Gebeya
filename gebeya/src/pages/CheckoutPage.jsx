// src/components/Checkout.js
import React from 'react';
import './Checkout.css'; // Import the styling file

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Shipping Address</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Street Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Zip Code" />
      </form>

      <h2>Order Summary</h2>
      {/* Replace with actual cart data */}
      <p>Product Name: Burberry Shine Sneakers</p>
      <p>Subtotal: $150</p>
      <p>Shipping: $10</p>
      <p>Tax: $5</p>
      <p>Total: $165</p>

      <h2>Payment Method</h2>
      <button>Credit Card</button>
      <button>Wallet</button>
      <button>Bank Transfer</button>

      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
