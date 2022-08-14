import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Hero } from "./components";
import { useCart } from "./context";
import { GlobalStyle } from "./GlobalStyles";
import Cart from "./views/Cart";
import Home from "./views/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { orderStatus } = useCart();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {orderStatus !== "ORDERING" && (
          <Route path="/order-status" element={<Cart />} />
        )}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
