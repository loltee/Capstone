import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function LogOut({ setToken }) {
  const navigate = useNavigate();
  const logout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <button onClick={logout} className="logout-link">
      Logout
    </button>
  );
}
