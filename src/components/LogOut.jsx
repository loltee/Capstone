import React from "react";

export default function LogOut() {
  const logout = () => {
    window.location.href = "/login";
  };

  return (
    <a href="#" onClick={logout} className="logout-link"></a>
    // <p className="logout">LogOut</p>;
  );
}
