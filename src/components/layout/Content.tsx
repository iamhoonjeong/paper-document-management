import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

import Loading from '../Loading';

import Home from '../../pages/home/Home';
import LibraryList from '../../pages/library/List';

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
        <Route path="/" exact component={Home} />
        <Route path="/library/list" component={LibraryList} />
      </StyledContent>
    </>
  );
};

export default Content;
