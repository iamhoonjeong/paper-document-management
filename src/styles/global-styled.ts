import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '../../node_modules/antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
    /* font-size: 1rem; */
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  header {
    font-size: 12px;
  }

  main {
    font-size: 12px;
  }
  
  // antd css custom
  .site-layout .site-layout-background {
    background-color: #fff;
  }

  .ant-layout-sider,
  .ant-menu.ant-menu-dark,
  .ant-layout-sider-trigger,
  .ant-menu-dark .ant-menu-inline.ant-menu-sub,
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, 
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background-color: #1e232e;
  }

  // side navigation
  .ant-menu {
    font-size: 12px;
  }

  // loading icon
  .loading-icon {
    font-size: 26px;
    color: #002140;
    position: relative;
    left: 120px;

    &.adjust {
      left: 40px;
    }
  }   
`;

export default GlobalStyle;
