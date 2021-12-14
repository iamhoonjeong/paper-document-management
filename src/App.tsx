import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import SideNav from './components/layout/SideNav';
import Header from './components/layout/Header';
import Content from './components/layout/Content';

const LayoutStyles = styled(Layout)`
  height: 100%;
`;

function App() {
  return (
    <LayoutStyles>
      <Router>
        <SideNav />
        <Layout className="site-layout">
          <Header />
          <Content />
        </Layout>
      </Router>
    </LayoutStyles>
  );
}

export default App;
