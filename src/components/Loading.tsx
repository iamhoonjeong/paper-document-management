import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

function Loading() {
  useEffect(() => {
    const trigger: any = document.querySelector('.ant-layout-sider-trigger');
    const icon = document.querySelector('.loading-icon');

    if (trigger.style.width !== '240px') {
      icon?.classList.add('adjust');
    } else {
      icon?.classList.remove('adjust');
    }
  }, []);

  return (
    <Container>
      <LoadingOutlined className="loading-icon" />
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.12);
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 1000;
`;
