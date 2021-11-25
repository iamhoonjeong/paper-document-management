import React from 'react';
import styled from 'styled-components';

const PageSubTitle = ({ children }: { children: string }) => {
  return <StyledPageSubTitle>{children}</StyledPageSubTitle>;
};

export default PageSubTitle;

const StyledPageSubTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  min-width: 56px;
`;
