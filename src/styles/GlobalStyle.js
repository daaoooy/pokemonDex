import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(255, 247, 205)
  }

  #root {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;   
  }
`;

export default GlobalStyle;
