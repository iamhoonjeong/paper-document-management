import React from 'react';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';

import TitleWrap from './components/documentCreate/TitleWrap';
import ToolWrap from './components/documentCreate/ToolWrap';
import FieldWrap from './components/documentCreate/FieldWrap';
import Field from './components/documentCreate/Field';
import Buttons from './components/documentCreate/Buttons';

const DocumentCreate = () => {
  return (
    <>
      <PageTitle>문서 만들기</PageTitle>
      <Wrap>
        <TitleWrap />
        <ContentsWrap>
          <ToolWrap />
          <ContentWrap>
            <ContentsLeft>
              <DocumentViewWrap />
            </ContentsLeft>
            <ContentsRight>
              <FieldWrap>
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
              </FieldWrap>
              <Buttons />
            </ContentsRight>
          </ContentWrap>
        </ContentsWrap>
      </Wrap>
    </>
  );
};

export default DocumentCreate;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 820px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  overflow: scroll;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
`;

const ContentsLeft = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  padding: 20px 20px 0 0;
  overflow: scroll;
`;

const ContentsRight = styled.div`
  min-width: 380px;
  height: 100%;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DocumentViewWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e2e2e2;
`;
