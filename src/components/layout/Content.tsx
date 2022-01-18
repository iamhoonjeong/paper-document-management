import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Loading from '../Loading';

import Home from '../../pages/home/Home';
import DocumentList from '../../pages/papyrus/TemplateList';
import DocumentCreate from '../../pages/papyrus/TemplateCreate';
import DocumentPageList from '../../pages/papyrus/TemplatePageList';
import PageCreate from '../../pages/papyrus/PageCreate';

const Content = () => {
  const loading = useSelector((state: RootState) => state.loading.onLoading);

  return (
    <>
      {loading && <Loading />}
      <StyledContent>
        <Route path="/" exact component={Home} />
        <Route path="/papyrus/template" exact component={DocumentList} />
        <Route path="/papyrus/template/create" component={DocumentCreate} />
        <Route path="/papyrus/template/pages" component={DocumentPageList} />
        <Route path="/papyrus/template/page/create" component={PageCreate} />
      </StyledContent>
    </>
  );
};

export default Content;

const StyledContent = styled(Layout.Content)`
  height: 100%;
  overflow-y: auto;
  padding: 20px 30px 30px;
`;
