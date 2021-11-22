import React from 'react';
import styled from 'styled-components';
import { Layout, Avatar } from 'antd';

const StyledHeader = styled(Layout.Header)`
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #1e232e;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader className="site-layout-background">
      <div></div>
      <div>
        <StyledAvatar>User</StyledAvatar>
      </div>
    </StyledHeader>
  );
};

export default Header;
