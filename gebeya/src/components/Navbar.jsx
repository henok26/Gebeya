import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">🛍️</span>
        <a href="/register" className="nav-link">Register/Sign In</a>
      </div>
      <div className="navbar-center">
        <a href="/" className="nav-link">Home</a>
        <a href="/men" className="nav-link">Men</a>
        <a href="/women" className="nav-link">Women</a>
        <a href="/kids" className="nav-link">Kids</a>
        <a href="/accessories" className="nav-link">Accessories</a>
        <a href="/more" className="nav-link">More</a>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">🔍</button>
        </div>
        <div className="language-currency">
          <button className="dropdown-button">EN/Currency ▼</button>
        </div>
        <div className="cart-icon">🛒</div>
      </div>
    </nav>
  );
};

export default Navbar;
