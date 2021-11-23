import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Loading from '../Loading';

const StyledContent = styled(Layout.Content)`
  height: 100%;
  overflow-y: scroll;
  padding: 20px 30px 50px;
`;

const Content = () => {
  const loading = useSelector((state: RootState) => state.loading.onLoading);

  return (
    <>
      {loading && <Loading />}
      <StyledContent>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </StyledContent>
    </>
  );
};

export default Content;
