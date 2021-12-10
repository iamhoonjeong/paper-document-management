import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Loading from '../Loading';

import Home from '../../pages/home/Home';
import Documents from '../../pages/library/Documents';
import DocumentPages from '../../pages/library/DocumentPages';
import PageCreate from '../../pages/library/PageCreate';

const Content = () => {
  const loading = useSelector((state: RootState) => state.loading.onLoading);

  return (
    <>
      {loading && <Loading />}
      <StyledContent>
        <Route path="/" exact component={Home} />
        <Route path="/library/documents" component={Documents} />
        <Route path="/library/document/pages" component={DocumentPages} />
        <Route path="/library/document/page/create" component={PageCreate} />
      </StyledContent>
    </>
  );
};

export default Content;

const StyledContent = styled(Layout.Content)`
  height: 100%;
  overflow-y: scroll;
  padding: 20px 30px 30px;
`;
