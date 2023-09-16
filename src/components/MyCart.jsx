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
      calculatedTotal += product.price;
    });
    setTotalPrice(calculatedTotal);
  }, []);
  // async function getCart() {
  //   try {
  //     const response = await fetch(`${baseUrl}carts`);
  //     const APIResponse = await response.json();
  //     setCart(APIResponse);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  // getCart();
  // if (location.state === null) {
  //   setCart((prevcart) => [...prevcart, !location.state]);
  // }

  // console.log(cart);

  const addItem = () => {
    if (item.trim() !== "") {
      setCart([...cart, item]);
      setItem("");
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    console.log(index, "---------------");

    updatedCart.splice(index, 1);
    setCart(updatedCart);
    console.log(cart);
  };
  // useEffect(() => {
  //   let calculatedTotal = 0;
  //   cart.forEach((cart) => {
  //     calculatedTotal += cart.price;
  //   }, setTotalPrice(calculatedTotal)[cart]);
  // });

  // const updateQuanity = (id, value) => {};

  console.log(cart, "hello", location.state);

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
              {item.price} {item.title} {item.quantity}
              {/* {<img src={item.image} alt={item.title} />} */}
              <button
                className="remove-button"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
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
