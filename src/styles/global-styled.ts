import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`;

export default GlobalStyle;
