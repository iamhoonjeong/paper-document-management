import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

import PageSubTitle from '../../../../components/PageSubTitle';

const TitleArea = () => {
  return (
    <SetTitleArea>
      <PageSubTitle title="페이지 이름" />
      <StyledInput placeholder="페이지 이름 입력" />
      <StyledButton type="primary">확인</StyledButton>
    </SetTitleArea>
  );
};

export default TitleArea;

const SetTitleArea = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  overflow: scroll;
`;

const StyledInput = styled(Input)`
  font-size: 12px;
  margin-left: 12px;
  width: 40%;
  max-width: 460px;
  &::placeholder {
    font-size: 12px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 12px;
  font-size: 12px;
`;
