import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const ProductCard = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Samsung</h6>
          <h5 className="product-title">Samsung Galaxy Watch</h5>
          <Rating onClick={handleRating} />

          <p className="price">$150.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
