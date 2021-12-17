import React from 'react';
import styled from 'styled-components';

import PageSubTitle from '../../../components/PageSubTitle';

const FieldWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledFieldWrap className="field-wrap">
      <PageSubTitle title="필드 레이어" />
      {children}
    </StyledFieldWrap>
  );
};

export default FieldWrap;

const StyledFieldWrap = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
