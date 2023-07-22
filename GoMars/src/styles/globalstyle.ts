import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: Outfit, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.2;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

 
  `;

export default GlobalStyle;
