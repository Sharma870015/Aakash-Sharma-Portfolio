import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
