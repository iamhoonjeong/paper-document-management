import React from 'react';
import styled from 'styled-components';

import PageSubTitle from '../../../../components/PageSubTitle';

const FieldWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledFieldWrap>
      <PageSubTitle>필드 레이어</PageSubTitle>
      {children}
    </StyledFieldWrap>
  );
};

export default FieldWrap;

const StyledFieldWrap = styled.div`
  overflow: scroll;
`;
