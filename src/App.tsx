import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Header, Hero } from "./components";
import { useCart } from "./context";
import { GlobalStyle } from "./GlobalStyles";
import Cart from "./views/Cart";
import Home from "./views/Home";
import { Toaster } from "react-hot-toast";
import Order from "./views/Order";
import OrderManagement from "./views/OrderManagement";
import Admin from "./views/Admin";
import { useUser } from "./context/UserContext";

const App = () => {
  const { user } = useUser();
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {!user && <Route path="/admin" element={<Admin />} />}

        <Route path="/order-status/:id" element={<Order />} />
        {user && <Route path="/orders-list" element={<OrderManagement />} />}

        <Route path="*" element={<Home />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
