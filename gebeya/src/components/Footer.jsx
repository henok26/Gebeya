import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src="your-logo.png" alt="Your Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li className="nav-header">About</li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">News & Blog</a></li>
            <li><a href="#">Location</a></li>
          </ul>
          <ul>
            <li className="nav-header">Products</li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Features</a></li>
          </ul>
          <ul>
            <li className="nav-header">Discover</li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;