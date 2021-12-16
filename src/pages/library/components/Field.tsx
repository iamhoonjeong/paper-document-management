import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { CopyOutlined, SwapOutlined } from '@ant-design/icons';

type FieldProps = {
  titleNumber: number;
  id: number;
  active?: boolean;
};

const Field = ({ titleNumber, active, id }: FieldProps) => {
  // scroll moving when create field position
  useEffect(() => {
    const field: HTMLDivElement | null = document.querySelector(`.field-${id}`);
    field?.scrollIntoView({ behavior: 'smooth' });
  }, [titleNumber, id]);

  return (
    <StyledField active={active} className={`field-${id}`}>
      <FieldHeaderWrap active={active}>
        <FieldHeaderLeft>
          <FieldTitle>
            <FieldIcon />
            필드 {titleNumber}
          </FieldTitle>
        </FieldHeaderLeft>
        <FieldHeaderRight>
          <CopyOutlined style={{ fontSize: '12px' }} />
        </FieldHeaderRight>
      </FieldHeaderWrap>
      <FieldContentWrap>
        <FieldContentName>필드 이름</FieldContentName>
        <FieldContentNameInput placeholder={`필드 ${titleNumber}`} />
      </FieldContentWrap>
    </StyledField>
  );
};

export default React.memo(Field);

const StyledField = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 120px;
  border: ${(props) => (props.active ? '1px solid #1890ff' : '1px solid #e2e2e2')};
  margin-top: 16px;
`;

const FieldHeaderWrap = styled.div<{ active?: boolean }>`
  height: 46px;
  border-bottom: ${(props) => (props.active ? '1px solid #1890ff' : '1px solid #e2e2e2')};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldHeaderLeft = styled.div``;

const FieldHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const FieldTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;

const FieldIcon = styled(SwapOutlined)`
  transform: rotate(90deg);
  margin-right: 8px;
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
