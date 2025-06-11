import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/shop";
import { ShopCategory } from "./Pages/shopCategory";
import { Product } from "./Pages/product";
import { LoginSignup } from "./Pages/loginSignup";
import { Cart } from "./Pages/cart";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
