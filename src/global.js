import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    // height: 100vh;
    // margin: 0;
    // padding: 0;
    font-family: 'Open Sans', sans-serif;
    transition: all 0.25s linear;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    // You might want to add other heading-specific styles here, e.g., fontWeight, letterSpacing
  }
`;
