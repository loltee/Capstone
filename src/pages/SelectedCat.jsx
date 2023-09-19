import React, { useEffect, useState } from "react";
import Meta from "../components/meta";
import { useNavigate } from "react-router-dom";

const SelectedCat = ({ cat, setCat }) => {
  const [store, setStore] = useState([]);
  const [specificItem, setSpecificItem] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("jewelery"); // Default category
  const baseUrl = "https://fakestoreapi.com";
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductsByCategory(category) {
      try {
        const response = await fetch(
          `${baseUrl}/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setStore(json);
        if (json.length > 0) {
          // Assuming you want to retrieve the first item in the response
          setSpecificItem(json[0]);
        }
      } catch (error) {
        console.error("Error fetching specific category:", error);
        setError(error.message);
      }
    }

    fetchProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  const addItem = (product) => {
    // Your add item logic here
    // ...

    navigate("/cart");
  };

  return (
    <>
      <Meta title={"Selected Category"} />
      <div>
        {/* Your component's content */}
        <h1>Selected Category</h1>
        {/* Category navigation */}
        <div>
          <button onClick={() => setSelectedCategory("jewelery")}>
            Jewelery
          </button>
          <button onClick={() => setSelectedCategory("electronics")}>
            Electronics
          </button>
          <button onClick={() => setSelectedCategory("clothing")}>
            Clothing
          </button>
          {/* Add more category buttons as needed */}
        </div>
        {/* Display the specific item */}
        {specificItem && (
          <div>
            <h2>Specific Item</h2>
            <p>{specificItem.title}</p>
            {/* Add more item details as needed */}
          </div>
        )}
        {error && <p>Error: {error}</p>}
        {store.map(function (product, id) {
          return (
            <div className="products" key={id}>
              <h1>{product.title}</h1>
              {<img src={product.image} alt={product.title} />}
              <li>Price: {product.price}</li>
              <button className="add-button" onClick={() => addItem(product)}>
                Add
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SelectedCat;
