import React from "react";
import "./HeroSection.css"; // Importing the CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Gebeya <span className="highlight">SHOP</span>
        </h1>
        <p className="hero-description">
          Discover a world of convenience with our user-friendly platform,
          curated collections, and exceptional customer service
        </p>
        <button className="hero-button">Explore Now</button>
      </div>
      <div className="hero-images">
        <img
          src="https://s3-alpha-sig.figma.com/img/17dd/830c/029f8e4464e6795f64e5288f50789756?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhLhJ1SA3PubMuRxccfGyQ-OiCTCbJiPWh2GuvJlGHthE-uYsbBmg~7bbXoYJvXqsZ6GQS57K870uB6IrZkvpjFSCe43GDbECAGMNlp1-j3S1tl-GUvqvGPI0ex3LUdxBn5uZ7E0pzxsyMe4TDjS8C5Gfr92pM3foE18KlKj4gQ3pfYhhYi-Vts5ti5hcKh4AAEx0JGRQ9CGySaCIlG54CLWYLVnWPEIX2WS-Emeh94FAuV7gJjE1r4kHMjVzuyiVgVE45o6mC~8RdlW~0-ZhNDGmzKjswSh1gpBUxASx3gY3LWgbscSxxDD300XQvCuuMNzC04FZUf7FyTuNmJ1Jw__" // Replace with your image
          alt="Product 1"
          className="hero-image small"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/b129/609d/5ac294ac50966ed122686dac28c8d4b4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hmvCvzdpuIN~lwm0u~j1gK1JeQ4Jg6BRGaoQ7L5vLmWJHduiINfcKi5oR6-s7p0r1l9J1ZOJQwU7~NgzY-tGAz5O2YBBjI6jcrO6d09BZp6aU100OYXau4NhCS~FQP0jFmVBBZ7uPYxfX-cTRd6XoD5NIP3-Omo2hpTTTb2NVHxwWcXPae6xk0beGqJciUW3gCc2LcGAKEnLAFs2KsY0DsB4JVKrqR1qdRmox25OMoY0D2ZK3MAM~-bA77M0VtA~QYM~9VPWE2D7u3q07hL1AY60eewQieb1JP4haG0pPOuOWDPKSrkJZDkx5Wd3DDJjKW3jUy~YdTuQiVufR-0LXg__" // Replace with your main image
          alt="Main Product"
          className="hero-image main"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/d4ae/9df5/7ad27de72b093ad4fe5e2edcd98a4dde?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBNXmeGyAFnRsgFlNLVdz9T77l3E5~0n0ztVaoR6ciHEWfS8fKr2ajEg8fkTJyu88h9pxgjbnKO-PS3V6kj~U8pierdQA5g~pN8aAjwri4BH3H2gBjjIySj5Ez1CLrmWF06SmqhB6xAbl5mPHL5DQJk2mAjnkXIvR1-vds1S5~cgGNfpokyClbOhd5lb4AKcoTPmY9Dn6zwLBHlKPjBPQ-7N1w9pT9Kjd7Y9oX7DC~h9VN5-v1VvVUGiTjI70pU68c2VQ2itoXVEME3HfDWYyZaVCIrbWYxX5E6vCPp~3BR7HSd-gtoVlLpFteYTG6V--87TLOk919hZSZEiInT4Sw__" // Replace with your image
          alt="Product 2"
          className="hero-image small"
        />
      </div>
    </div>
  );
};

export default HeroSection;
