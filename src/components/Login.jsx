import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Meta from "./meta";

function Login({ token, setToken }) {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hello World");
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      setToken(result.token);
      // navigate("/contact");
    } catch (error) {
      setError(error.message);
      console.log("gettingerrormessage");
    }
  }
  return (
    <div className="Login">
      <Meta title={""} />
      <Breadcrumb title="" />

      <div className="login-wrapper py -5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card"></div>
          </div>
        </div>
      </div>
      <h1>Login</h1>
      <form>
        <div>
          <input
            type="username"
            name="username"
            placeholder="Username"
            className="form-control"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Link to="/forgot-password">Forgot Password</Link>
          <div className=" d-flex justify-content-center gap-15 align-items-center">
            <button onClick={handleSubmit} className="button border-0">
              Login
            </button>
            <Link className="button" to="/signup">
              SignUp
            </Link>
          </div>
        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
