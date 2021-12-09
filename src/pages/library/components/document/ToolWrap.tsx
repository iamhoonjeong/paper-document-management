import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Slider, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { fabric } from 'fabric';
import { RootState } from '../../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setCanvasImage, setZoomValue, addField } from '../../../../store/canvas';

import PageSubTitle from '../../../../components/PageSubTitle';

type ToolWrapProps = {
  canvas: fabric.Canvas | undefined;
};

const ToolWrap = ({ canvas }: ToolWrapProps) => {
  const dispatch = useDispatch();
  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue);

  // add field
  const addFields = useCallback(() => {
    dispatch(addField('field'));
  }, [dispatch]);

  // remove field
  const removeField = useCallback(() => {
    let fields: any = canvas?.getActiveObjects();
    if (fields) {
      for (let i = 0; i < fields.length; i++) {
        canvas?.remove(fields[i]);
      }
    }
    fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
  }, [canvas]);

  // zoom value change
  const zoomValueChange = useCallback(
    (value: any) => {
      dispatch(setZoomValue(value));
    },
    [dispatch],
  );

  // image upload
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
          <StyledToolButton onClick={addFields}>필드 추가</StyledToolButton>
          <StyledToolButton onClick={removeField}>필드 삭제</StyledToolButton>
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="문서 추가" desc="jpg, png" />
        <ToolCenterWrap>
          <Upload {...props}>
            <StyledToolButton icon={<UploadOutlined />}>이미지 업로드</StyledToolButton>
          </Upload>
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="문서 확대/축소" />
        <ToolCenterWrap>
          <StyledSlider
            min={0}
            max={500}
            onChange={zoomValueChange}
            value={typeof zoomValue === 'number' ? zoomValue : 0}
            tooltipVisible={false}
          />
          <StyledInputNumber
            min={0}
            max={500}
            style={{ margin: '0 16px' }}
            value={zoomValue}
            onChange={zoomValueChange}
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
  min-width: 62px;
  width: 62px;
  font-size: 12px;
`;
