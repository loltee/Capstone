import React {useState} from 'react'

function MyCart() {
    
    const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');

  const addItem = () => {
    if (item.trim() !== '') {
      setCart([...cart, item]);
      setItem('');
    }
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
    
    
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
              {item}
              <button className="remove-button" onClick={() => removeItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
}
    


export default MyCart
