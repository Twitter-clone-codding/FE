import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle<ThemeProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html {
    overflow: auto scroll;
    overscroll-behavior-y: none;
    font-size: 15px;
    

  }
  body {
    height :764px;
    font-family:
      "TwitterChirp",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
      

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
