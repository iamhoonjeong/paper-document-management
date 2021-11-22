import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <LayoutStyles>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed((prev) => !prev)}
          collapsedWidth="50"
          width="250"
        >
          <div className="logo" style={{ height: '32px', margin: '16px' }} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/about">about</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Menu
            </Menu.Item>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Menu">
              <Menu.Item key="3">SubMenu</Menu.Item>
              <Menu.Item key="4">SubMenu</Menu.Item>
              <Menu.Item key="5">SubMenu</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DesktopOutlined />} title="Menu">
              <Menu.Item key="6">SubMenu</Menu.Item>
              <Menu.Item key="8">SubMenu</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<DesktopOutlined />}>
              Menu
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Breadcrumb>
              <Breadcrumb.Item>path</Breadcrumb.Item>
              <Breadcrumb.Item>path</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <ContentStyled>
            <div>alskdfhasdhf</div>
          </ContentStyled>
        </Layout>
      </LayoutStyles>
    </>
  );
};

export default Home;

const LayoutStyles = styled(Layout)`
  height: 100%;
`;

const ContentStyled = styled(Content)`
  height: 100%;
  overflow-y: scroll;
  padding: 20px 30px 50px;
`;
