import React from "react";
import Header from "./components/Header/index.js";
import Products from './components/Products/index.js';
import ProductDetails from './components/ProductDetail/index.js';
import Cart from "./components/Cart/index.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route />
      </Routes>
    </>
  );
};
export default App;
