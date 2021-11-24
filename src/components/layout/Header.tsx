import React from 'react';
import styled from 'styled-components';
import { Layout, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../modules/loading';
import { UserOutlined } from '@ant-design/icons';

const StyledHeader = styled(Layout.Header)`
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  z-index: 100;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #1e232e;
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();

  const onLoad = () => {
    dispatch(setLoading());
    setTimeout(() => {
      dispatch(setLoading());
    }, 300);
  };

  return (
    <StyledHeader className="site-layout-background">
      <div onClick={onLoad}>새로고침</div>
      <div>
        <StyledAvatar>
          <UserOutlined style={{ fontSize: '16px' }} />
        </StyledAvatar>
      </div>
    </StyledHeader>
  );
};

export default Header;
