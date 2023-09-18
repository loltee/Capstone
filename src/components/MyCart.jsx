import { useState, useEffect } from "react";
import React from "react";
import { getProduct } from "../api";
import { useLocation } from "react-router-dom";
import OurStore from "../pages/ourStore";

function MyCart({ cart, setCart }) {
  const [item, setItem] = useState("");
  const baseUrl = "https://fakestoreapi.com/";
  const location = useLocation();
  const [number, setNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState("item.price");

  useEffect(() => {
    let calculatedTotal = 0;
    cart.forEach((product) => {
      calculatedTotal += product.price * product.quantity; // Multiply price by quantity
    });
    setTotalPrice(calculatedTotal);
  }, [cart]); // Recalculate when cart changes

  const addItem = () => {
    if (item.trim() !== "") {
      setCart([...cart, { title: item, price: 0, quantity: 1 }]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  if (cart.length > 0) {
    return (
      <div className="shopping-cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="input-container">
          <input
            type="text"
            className="item-input"
            placeholder="Add item to cart"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="add-button" onClick={addItem}>
            Add
          </button>
        </div>
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <div className="item-info">
                  <span className="item-title">{item.title}</span>
                  <span className="item-quantity">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className="item-actions">
                  <span className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    );
  } else {
    return <p className="emptytag">Your Cart Is Empty</p>;
  }
}

export default MyCart;
