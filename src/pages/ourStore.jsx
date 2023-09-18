import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import Meta from "../components/meta";
import { useNavigate } from "react-router-dom";

const OurStore = ({ cart, setCart }) => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = "https://fakestoreapi.com";

  // const [item, setItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getStore() {
      const response = await fetch(`${baseUrl}/products`);
      const APIResponse = await response.json();

      // console.log("APIResponse", APIResponse);
      // console.log("newAPIResponse", newAPIResponse);
      if (APIResponse) {
        setStore(APIResponse);
      } else {
        console.error("couldnt fetch products");
      }
    }

    getStore().catch(console.log(error));
  }, []);
  useEffect(() => {
    async function getJewelryStore() {
      try {
        const response = await fetch(`${baseUrl}/products/category/jewelery`);
        const jewelryAPIResponse = await response.json();

        if (jewelryAPIResponse) {
          // Merge the jewelry products with the existing store
          setStore((prevStore) => [...prevStore, ...jewelryAPIResponse]);
        } else {
          console.error("Could not fetch jewelry products");
        }
      } catch (error) {
        console.error("Error fetching jewelry category:", error);
      }
    }

    getJewelryStore();
  }, []); // Run this effect only once on component mount

  // Adding the new API call
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) =>
        console.error("Error fetching jewelry category:", error)
      );
  }, []); // Run this effect only once on component mount

  console.log("store", store);

  const addItem = (product) => {
    console.log("product", product);
    // setCart([...cart, product]);
    // navigate("/cart");
    console.log("cart", cart);
    console.log(
      "output",
      cart.find((e) => e.id === product.id)
    );
    if (cart.find((e) => e.id === product.id)) {
      const itemIndex = cart.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      const updatedCartItems = [...cart];
      updatedCartItems[itemIndex].quantity += 1;
      setCart(updatedCartItems);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    navigate("/cart");
  };
  console.log(cart);
  return (
    <>
      <div>
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

export default OurStore;
