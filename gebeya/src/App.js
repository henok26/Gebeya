import React, { useState } from "react";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Import pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

  const App = () => {
    const [cart, setCart] = useState([]);
  
    // Function to add items to the cart
    const addToCart = (product) => {
      setCart((prevCart) => {
        const itemExists = prevCart.find((item) => item.id === product.id);
        if (itemExists) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    };
  
    // Function to remove items from the cart
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
  
    // Function to increase the quantity of an item
    const increaseQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    // Function to decrease the quantity of an item
    const decreaseQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
  
    // Function to clear the cart
    const clearCart = () => {
      setCart([]);
    };
  return (
    // Function to add items to the cart

    
    <Router>
      <div>
        {/* Add a simple navigation bar */}
        <nav>
          <a href="/">Home</a> | <a href="/cart">Cart</a> | <a href="/checkout">Checkout</a>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
