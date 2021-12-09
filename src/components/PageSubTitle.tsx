import React from 'react';
import styled from 'styled-components';

type PageSubTitleProps = {
  title?: string;
  desc?: string;
};

const PageSubTitle = ({ title, desc }: PageSubTitleProps) => {
  return (
    <StyledPageSubTitle>
      {title}
      {desc && <span>( {desc} )</span>}
    </StyledPageSubTitle>
  );
};

export default PageSubTitle;

const StyledPageSubTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  min-width: 56px;

  span {
    margin-left: 4px;
    font-weight: normal;
    font-size: 12px;
  }
`;
