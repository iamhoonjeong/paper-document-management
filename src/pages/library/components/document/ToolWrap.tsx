import React from 'react';
import styled from 'styled-components';
import { Button, Slider, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCanvasImage,
  setZoomValue,
  insertField,
} from '../../../../store/canvas';

import PageSubTitle from '../../../../components/PageSubTitle';
import { RootState } from '../../../../store';

const ToolWrap = () => {
  const dispatch = useDispatch();

  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue);
  const onChange = (value: any) => {
    dispatch(setZoomValue(value));
  };

  const props = {
    beforeUpload: (file: any) => {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        dispatch(setCanvasImage(file));
        return Upload.LIST_IGNORE;
      } else {
        message.error(`jpg, png 파일만 업로드할 수 있습니다.`);
        return Upload.LIST_IGNORE;
      }
    },
    onChange: (info: any) => {},
  };

  return (
    <StyledToolWrap>
      <Tool>
        <PageSubTitle title="필드 추가" />
        <ToolCenterWrap>
          <StyledToolButton onClick={() => dispatch(insertField('insert'))}>
            필드 추가
          </StyledToolButton>
          {/* <StyledToolButton>체크박스 추가</StyledToolButton> */}
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="문서 추가" desc="jpg, png" />
        <ToolCenterWrap>
          <Upload {...props}>
            <StyledToolButton icon={<UploadOutlined />}>
              이미지 업로드
            </StyledToolButton>
          </Upload>
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="문서 확대/축소" />
        <ToolCenterWrap>
          <StyledSlider
            min={0}
            max={300}
            onChange={onChange}
            value={typeof zoomValue === 'number' ? zoomValue : 0}
          />

          <StyledInputNumber
            min={0}
            max={300}
            style={{ margin: '0 16px' }}
            value={zoomValue}
            onChange={onChange}
          />
        </ToolCenterWrap>
      </Tool>
    </StyledToolWrap>
  );
};

export default ToolWrap;

const StyledToolWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-width: 400px;
  height: 90px;
  border-bottom: 1px solid #e2e2e2;
  overflow: scroll;
`;

const Tool = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
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

const StyledToolButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 12px;
  }
`;

const StyledInputNumber = styled(InputNumber)`
  width: 68px;
  font-size: 12px;
`;
