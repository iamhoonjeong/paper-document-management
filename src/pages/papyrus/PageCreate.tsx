import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fabric } from 'fabric';

import PageTitle from '../../components/PageTitle';
import TitleWrap from './components/TitleWrap';
import ToolWrap from './components/ToolWrap';
import Canvas from './components/Canvas';
import FieldWrap from './components/FieldWrap';
import Field from './components/Field';
import Buttons from './components/Buttons';

const DocumentCreate = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();
  const [fieldCount, setFieldCount] = useState(0);

  const Fields = useSelector((state: RootState) => state.canvas.fields);
  const activeFields: number[] = useSelector((state: RootState) => state.canvas.activeFields);
  const canvasImage = useSelector((state: RootState) => state.canvas.image);

  return (
    <>
      <PageTitle>페이지 만들기</PageTitle>
      <Wrap>
        <TitleWrap title="페이지" />
        <ContentsWrap>
          <ToolWrap canvas={canvas} fieldCount={fieldCount} setFieldCount={setFieldCount} />
          <ContentWrap>
            <ContentsLeft>
              <CanvasWrap id="canvas-wrap">
                <Canvas canvas={canvas} setCanvas={setCanvas} />
              </CanvasWrap>
              {canvasImage && <CanvasWrapCornerBox />}
            </ContentsLeft>
            <ContentsRight>
              <FieldWrap>
                {Fields.map((el: any, i: any) => {
                  return activeFields.includes(el.id) ? (
                    <Field
                      key={i}
                      titleNumber={i + 1}
                      active
                      id={el.id}
                      canvas={canvas}
                      fieldCount={fieldCount}
                      setFieldCount={setFieldCount}
                    />
                  ) : (
                    <Field
                      key={i}
                      titleNumber={i + 1}
                      id={el.id}
                      canvas={canvas}
                      fieldCount={fieldCount}
                      setFieldCount={setFieldCount}
                    />
                  );
                })}
              </FieldWrap>
              <Buttons />
            </ContentsRight>
          </ContentWrap>
        </ContentsWrap>
      </Wrap>
    </>
  );
};

export default React.memo(DocumentCreate);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: calc(100vh - 114px);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  overflow: auto;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: calc(100% - 90px);
  display: flex;
`;

const ContentsLeft = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  padding: 20px 20px 0 0;
  overflow: auto;
  position: relative;
`;

const ContentsRight = styled.div`
  min-width: 360px;
  height: 100%;
  padding: 20px 0 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CanvasWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: #f1f3f5;
    opacity: 0.3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #868e96;
    border-radius: 4px;
  }
`;

const CanvasWrapCornerBox = styled.div`
  width: 7px;
  height: 7px;
  background-color: #f1f3f5;
  position: absolute;
  right: 20px;
  bottom: 0;
`;
