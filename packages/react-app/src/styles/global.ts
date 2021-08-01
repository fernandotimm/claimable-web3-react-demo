import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    font-size: 62.5%;

    @media (max-width: 600px) {
      font-size: 80%;
    }
  }

  html body {
    background-color: white;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    min-width: 320px;
  }

  /* CSS Reset */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
`