import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ children }: { children: string }) => {
  return <Title>{children}</Title>;
};

export default PageTitle;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;
