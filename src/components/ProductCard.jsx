import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { getProduct } from "../api";

const ProductCard = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const baseUrl = "https://fakestoreapi.com/";

  // useEffect(() => {
  //   async function getProduct() {
  //     const response = await fetch(`${baseUrl}/product/1`);
  //     const APIResponse = await response.json();

  //     if (APIResponse.success) {
  //       setProduct(APIResponse.data.product);
  //     } else {
  //       setError(error.message);
  //     }
  //   }
  //   getProduct();
  // }, []);
  // console.log(product);
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/pinkwatch.jpg" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Samsung</h6>
          <h5 className="product-title">Samsung Galaxy Watch</h5>
          <Rating onClick={handleRating} />
          <p className="price">$150.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
