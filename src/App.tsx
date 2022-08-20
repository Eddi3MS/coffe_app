import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Hero } from "./components";
import { useCart } from "./context";
import { GlobalStyle } from "./GlobalStyles";
import Cart from "./views/Cart";
import Home from "./views/Home";
import { Toaster } from "react-hot-toast";
import Order from "./views/Order";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/order-status/:id" element={<Order />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
