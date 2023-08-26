// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./components/sidenav";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/ABout";
import Contact from "./pages/Contact";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div>
        <Sidenav />
      </div>
    </>
  );
}

export default App;
