// import { useState } from 'react'
import {useState, useEffect} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidenav from './components/sidenav';
import Layout from './components/Layout';
import Home from './pages/Home';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import Contact from './pages/Contact';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import OurStore from './pages/ourStore';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import MyCart from './components/MyCart';
import LogOut from './components/LogOut';

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const getProductPrices = async () => {
      if (cart.length < 1) return;
      cart.forEach(async (item) => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${item.productId}`
        );
        const result = await response.json();
        setProductsCart((prev) => [...prev, result.price]);
      });
    };
    getProductPrices();
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Header
          token={token}
          cart={cart}
          setProductsHandler={setProducts}
          setToken={setToken}
          productsCart={productsCart}
        />
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          />
          <Route
            path='/home'
            index
            element={<Home />}
          />

          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/store'
            element={
              <OurStore
                cart={cart}
                setCart={setCart}
                products={products}
                setProductsHandler={setProducts}
              />
            }
          />
          <Route
            path='/signup'
            element={<SignUpForm />}
          />
          <Route
            path='/login'
            element={
              <Login
                token={token}
                setToken={setToken}
                setCart={setCart}
              />
            }
          />
          <Route
            path='/logout'
            element={
              <LogOut
                setProducts={setProducts}
                setProductsCart={setProductsCart}
                setCart={setCart}
              />
            }
          />
          <Route
            path='/cart'
            element={
              <MyCart
                cart={cart}
                setCart={setCart}
                productsCart={productsCart}
              />
            }
          />

          <Route
            path='/forgot-password'
            element={<ForgotPasswordForm />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
