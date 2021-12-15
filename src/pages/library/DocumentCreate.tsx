import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, message } from 'antd';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setCreateTitleInput } from '../../store/library';

import PageTitle from '../../components/PageTitle';
import TitleWrap from './components/TitleWrap';

const DocumentCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const titleWrapInputData = useSelector((state: RootState) => state.library.createTitle);

  const documentCreate = useCallback(() => {
    if (titleWrapInputData.length === 0) {
      message.info('문서 이름을 입력하세요');
      return;
    }

    dispatch(setCreateTitleInput(''));

    setTimeout(() => {
      history.push('/library/document');
    }, 500);
  }, [dispatch, history, titleWrapInputData]);

  return (
    <>
      <PageTitle>문서 만들기</PageTitle>
      <TitleWrap
        title="문서"
        documentCreate={
          <>
            <DocumentCreateButton onClick={() => history.goBack()}>취소</DocumentCreateButton>
            <DocumentCreateButton type="primary" onClick={documentCreate}>
              저장
            </DocumentCreateButton>
          </>
        }
      />
    </>
  );
};

export default DocumentCreate;

const DocumentCreateButton = styled(Button)`
  font-size: 12px;
  margin-left: 8px;
  & + & {
  }
`;
