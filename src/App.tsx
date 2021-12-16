import React from 'react';
import styled from 'styled-components';
import { Route, useHistory } from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/login/Login';
import SideNav from './components/layout/SideNav';
import Header from './components/layout/Header';
import Content from './components/layout/Content';

function App() {
  const isLoginPage = useHistory().location.pathname === '/login';

  return (
    <LayoutStyles>
      {isLoginPage && <Route path="/login" component={Login} />}
      {!isLoginPage && (
        <>
          <SideNav />
          <Layout className="site-layout">
            <Header />
            <Content />
          </Layout>
        </>
      )}
    </LayoutStyles>
  );
}

export default App;

const LayoutStyles = styled(Layout)`
  height: 100%;
`;
