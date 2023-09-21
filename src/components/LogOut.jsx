import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LogOut({ setToken, setCart }) {
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    setCart([]);
    navigate("/login");
  };

  return (
    <button onClick={logout} className="logout-link">
      Logout
    </button>
  );
}
