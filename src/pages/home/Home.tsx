import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const CardWrap = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 30px;
  column-gap: 10px;
`;

const Card = styled.div`
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  min-width: 200px;
  height: 300px;
  background-color: #fff;
  padding: 20px;
`;

const CardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const Home = () => {
  return (
    <>
      <Title>홈</Title>
      <CardWrap>
        <Card>
          <CardTitle>네트워크</CardTitle>
        </Card>
        <Card>
          <CardTitle>네트워크</CardTitle>
        </Card>
        <Card>
          <CardTitle>네트워크</CardTitle>
        </Card>
        <Card>
          <CardTitle>네트워크</CardTitle>
        </Card>
      </CardWrap>
    </>
  );
};

export default Home;
