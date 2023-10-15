import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    line-height: 1.5;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }

  body{
    background-color: #F1F3F5;
  }
  `
