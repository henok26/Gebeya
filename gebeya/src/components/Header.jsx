import React from "react";
import "./Header.css"; // Add styles here

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Gebeya SHOP</h1>
      </div>
      <nav>
        <button className="cta-button">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
