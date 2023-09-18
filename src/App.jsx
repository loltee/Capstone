// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./components/sidenav";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OurStore from "./pages/ourStore";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/login";
import MyCart from "./components/MyCart";
import { useState } from "react";
import LogOut from "./components/LogOut";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header token={token} />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />

          <Route path="contact" element={<Contact />} />
          <Route
            path="/store"
            element={<OurStore cart={cart} setCart={setCart} />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />

          <Route
            path="/cart"
            element={<MyCart cart={cart} setCart={setCart} />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
