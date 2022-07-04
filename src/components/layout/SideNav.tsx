import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BookOutlined, LoginOutlined } from '@ant-design/icons';

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
        {collapsed ? <LogoNarrow>S</LogoNarrow> : <LogoWide src="/images/logos/logo.svg" alt="company logo" />}
      </LogoWrap>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Item key="1" icon={<HomeOutlined />}>
          <Link to="/">홈</Link>
        </Item>
        <SubMenu key="sub1" icon={<BookOutlined />} title="문서 관리">
          <Item key="2">
            <Link to="/papyrus/template">템플릿</Link>
          </Item>
          {/* <Item key="3">
            <Link to="/papyrus/template/create">문서 만들기</Link>
          </Item>
          <Item key="4">
            <Link to="/papyrus/template/pages">페이지 목록</Link>
          </Item>
          <Item key="5">
            <Link to="/papyrus/template/page/create">페이지 만들기</Link>
          </Item> */}
        </SubMenu>
        <Item key="6" icon={<LoginOutlined />}>
          <Link to="/login">로그인</Link>
        </Item>
      </Menu>
    </Layout.Sider>
  );
};

export default SideNav;
