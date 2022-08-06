import React from "react";
import { Header, Hero } from "./components";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Hero />
    </div>
  );
};

export default App;
