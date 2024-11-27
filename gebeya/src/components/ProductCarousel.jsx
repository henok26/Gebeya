 
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css"; // Add styles here

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
