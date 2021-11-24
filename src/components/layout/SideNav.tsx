import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';

const LogoWrap = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWide = styled.img`
  width: 140px;
`;

const LogoNarrow = styled.span`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { SubMenu, Item } = Menu;

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed((prev) => !prev)}
      collapsedWidth="50"
      width="250"
      style={{ fontSize: '12px' }}
    >
      <LogoWrap>
        {collapsed ? (
          <LogoNarrow>S</LogoNarrow>
        ) : (
          <LogoWide
            src="/images/logos/smallticket_white.png"
            alt="company logo"
          />
        )}
      </LogoWrap>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Item key="1" icon={<HomeOutlined />}>
          <Link to="/">홈</Link>
        </Item>
        <SubMenu key="sub1" icon={<BookOutlined />} title="문서 라이브러리">
          <Item key="2">
            <Link to="/library/list">문서 목록</Link>
          </Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

export default SideNav;
