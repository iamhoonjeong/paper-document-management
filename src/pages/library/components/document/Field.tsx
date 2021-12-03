import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import { SwapOutlined } from '@ant-design/icons';

type FieldProps = {
  titleNumber: number;
};

const Field = ({ titleNumber }: FieldProps) => {
  return (
    <StyledField>
      <FieldHeaderWrap>
        <FieldTitle>
          <FieldIcon />
          필드 {titleNumber}
        </FieldTitle>
        <FieldDeleteButton danger>삭제</FieldDeleteButton>
      </FieldHeaderWrap>
      <FieldContentWrap>
        <FieldContentName>필드이름</FieldContentName>
        <FieldContentNameInput />
      </FieldContentWrap>
    </StyledField>
  );
};

export default Field;

const StyledField = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid #e2e2e2;
  margin-top: 16px;
`;

const FieldHeaderWrap = styled.div`
  height: 46px;
  border-bottom: 1px solid #e2e2e2;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;

const FieldIcon = styled(SwapOutlined)`
  transform: rotate(90deg);
  margin-right: 8px;
`;

const FieldDeleteButton = styled(Button)`
  font-size: 12px;
`;

const FieldContentWrap = styled.div`
  padding: 20px;
  height: 72px;
  display: flex;
  align-items: center;
`;

const FieldContentName = styled.div`
  white-space: nowrap;
`;

const FieldContentNameInput = styled(Input)`
  font-size: 12px;
  margin-left: 12px;
`;
