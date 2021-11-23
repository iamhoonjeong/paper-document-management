import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd';

type ListProps = {
  match: RouteComponentProps;
};

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const CreateButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 10px;
  }
`;
const List = ({ match }: ListProps) => {
  console.log(match);
  return (
    <>
      <Title>문서 목록</Title>
      <ButtonWrap>
        <CreateButton type="primary">문서 생성</CreateButton>
        <CreateButton type="default">문서 저장</CreateButton>
      </ButtonWrap>
    </>
  );
};

export default List;
