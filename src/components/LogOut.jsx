import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export default function LogOut({
  setToken,
  setProducts,
  setProductsCart,
  setCart,
}) {
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    setProducts([]);
    setProductsCart([]);
    setCart([]);
    navigate('/login');
  };

  return (
    <button
      onClick={logout}
      className='logout-link'
    >
      Logout
    </button>
  );
}
