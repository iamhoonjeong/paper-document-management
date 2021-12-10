import React from 'react';
import styled from 'styled-components';

type PageSubTitleProps = {
  title?: string;
  desc?: string;
  width?: number | undefined;
};

const PageSubTitle = ({ title, desc, width }: PageSubTitleProps) => {
  return (
    <StyledPageSubTitle width={width}>
      {title}
      {desc && <span>( {desc} )</span>}
    </StyledPageSubTitle>
  );
};

export default PageSubTitle;

const StyledPageSubTitle = styled.div<{ width?: number }>`
  font-weight: bold;
  font-size: 14px;
  min-width: ${(props) => (props.width ? `${props.width}px` : '56px')};

  span {
    margin-left: 4px;
    font-weight: normal;
    font-size: 12px;
  }
`;
