import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  font-family: "Roboto", sans-serif;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*,
*::after,
*::before {
  margin: 0;
}

body {
  min-height: 100vh;
  padding-top: 104px;
}

button {
  cursor: pointer;
}

ul { 
  list-style-type: none;
  padding: 0;
}

.font-2 {
  font-family:"Baloo 2", sans-serif;
  font-weight: 700;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 1120px;
  margin-inline: auto;
}

`;
