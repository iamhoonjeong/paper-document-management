import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Buttons = () => {
  const history = useHistory();

  return (
    <ButtonsWrap>
      <StyledButton onClick={() => history.goBack()}>취소</StyledButton>
      <StyledButton type="primary">저장</StyledButton>
    </ButtonsWrap>
  );
};

export default Buttons;

const ButtonsWrap = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-top: 1px solid #e2e2e2;
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 8px;
  }
`;
