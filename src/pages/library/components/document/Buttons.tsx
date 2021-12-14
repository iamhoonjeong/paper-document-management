import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const DocumentCreateButtons = () => {
  const history = useHistory();

  return (
    <DocumentButtonWrap>
      <DocumentCompleteButton onClick={() => history.goBack()}>취소</DocumentCompleteButton>
      <DocumentCompleteButton type="primary">저장</DocumentCompleteButton>
    </DocumentButtonWrap>
  );
};

export default DocumentCreateButtons;

const DocumentButtonWrap = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-top: 1px solid #e2e2e2;
  margin-top: 16px;
`;

const DocumentCompleteButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 8px;
  }
`;
