import { createGlobalStyle } from "styled-components";
import { BACKGROUND_COLOR } from "./colors";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  #root{
    margin: 0 auto;
  }

  html {
    background-color: ${BACKGROUND_COLOR};
  }
`;
