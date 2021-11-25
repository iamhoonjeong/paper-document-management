import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, Slider, InputNumber } from 'antd';

import PageTitle from '../../components/PageTitle';

const DocumentCreate = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (value: any) => {
    setInputValue(value);
  };
  return (
    <>
      <PageTitle>문서 만들기</PageTitle>
      <Wrap>
        <SetTitleArea>
          <SubTitle>문서 이름</SubTitle>
          <StyledInput placeholder="문서 이름 입력" />
          <StyledButton type="primary">확인</StyledButton>
        </SetTitleArea>
        <SetContentArea>
          <ContentToolArea>
            <ToolWrap>
              <SubTitle>필드 추가</SubTitle>
              <ToolCenterWrap>
                <StyledToolButton>필드 추가</StyledToolButton>
                <StyledToolButton>체크박스 추가</StyledToolButton>
              </ToolCenterWrap>
            </ToolWrap>
            <ToolWrap>
              <SubTitle>문서 확대/축소</SubTitle>
              <ToolCenterWrap>
                <StyledSlider
                  min={0}
                  max={300}
                  onChange={onChange}
                  value={typeof inputValue === 'number' ? inputValue : 0}
                />

                <StyledInputNumber
                  min={0}
                  max={300}
                  style={{ margin: '0 16px' }}
                  value={inputValue}
                  onChange={onChange}
                />
              </ToolCenterWrap>
            </ToolWrap>
          </ContentToolArea>
          <ContentWrap>
            <ContentLeft></ContentLeft>
            <ContentRight>
              <SubTitle>필드 레이어</SubTitle>
            </ContentRight>
          </ContentWrap>
        </SetContentArea>
      </Wrap>
    </>
  );
};

export default DocumentCreate;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SetTitleArea = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  font-size: 12px;
  margin-left: 12px;
  width: 40%;
  max-width: 460px;
  &::placeholder {
    font-size: 12px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 12px;
  font-size: 12px;
`;

const SetContentArea = styled.div`
  width: 100%;
  height: 820px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  overflow: scroll;
`;

const ContentToolArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-width: 400px;
  height: 90px;
  border-bottom: 1px solid #e2e2e2;
  overflow: scroll;
`;

const ToolWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const ToolCenterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 60%;
  font-size: 12px;
`;

const StyledInputNumber = styled(InputNumber)`
  width: 68px;
  font-size: 12px;
`;

const StyledToolButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 12px;
  }
`;

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
`;

const ContentLeft = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  padding: 20px 20px 0 0;
  overflow: scroll;
`;

const ContentRight = styled.div`
  min-width: 380px;
  height: 100%;
  padding: 20px 0 0 20px;
  overflow: scroll;
`;
