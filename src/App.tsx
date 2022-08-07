import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Hero } from "./components";
import { GlobalStyle } from "./GlobalStyles";
import Home from "./views/Home";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
