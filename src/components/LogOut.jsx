import React from "react";

export default function LogOut({ setToken }) {
  const logout = () => {
    setToken(null);
    window.location.href = "/login";
  };

  return (
    <a href="#" onClick={logout} className="logout-link">
      Logout
    </a>
  );
}
