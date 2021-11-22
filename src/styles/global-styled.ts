import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '../../node_modules/antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 12px;
  }
  
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
`;

export default GlobalStyle;
