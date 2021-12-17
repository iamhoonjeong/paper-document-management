import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Slider, InputNumber, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { fabric } from 'fabric';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCanvasImage,
  setZoomValue,
  addField as addFieldAction,
  removeField as removeFieldAction,
  unSetActiveField,
} from '../../../store/canvas';

import PageSubTitle from '../../../components/PageSubTitle';

type ToolWrapProps = {
  canvas: fabric.Canvas | undefined;
  fieldCount: number;
  setFieldCount: React.Dispatch<number>;
};

const ToolWrap = ({ canvas, fieldCount, setFieldCount }: ToolWrapProps) => {
  const dispatch = useDispatch();
  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue);

  // add field
  const addField = useCallback(() => {
    // block add field when without canvas
    if (!canvas?.getWidth()) return;

    dispatch(unSetActiveField());
    dispatch(addFieldAction(fieldCount));

    let rect = new fabric.Rect({
      width: 100,
      height: 100,
      left: 20,
      top: 20,
      fill: 'rgba(25, 144, 255, 0.3)',
      data: {
        id: fieldCount,
      },
    });
    canvas?.add(rect);
    canvas?.setActiveObject(rect);

    setFieldCount(fieldCount + 1);
  }, [canvas, dispatch, fieldCount, setFieldCount]);

  // remove field
  const removeField = useCallback(() => {
    let fields: any = canvas?.getActiveObjects();

    if (fields.length === 0) return;

    fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';

    for (let i = 0; i < fields.length; i++) {
      canvas?.remove(fields[i]);
    }

    dispatch(unSetActiveField());
    fields.map((field: any) => dispatch(removeFieldAction(field.data.id)));
  }, [canvas, dispatch]);

  const removeAllField = useCallback(() => {
    if (window.confirm('전체 필드를 삭제하시겠어요?')) {
      let allFields: fabric.Object[] | undefined = canvas?.getObjects();

      if (allFields) {
        for (let i = 0; i < allFields?.length; i++) {
          canvas?.remove(allFields[i]);
        }
        dispatch(unSetActiveField());
        allFields.map((field: any) => dispatch(removeFieldAction(field.data.id)));
      }
    } else {
      return false;
    }
  }, [canvas, dispatch]);

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
        message.info(`jpg, png 파일만 업로드할 수 있습니다.`);
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
          <StyledToolButton onClick={addField}>필드 추가</StyledToolButton>
          <StyledToolButton onClick={removeField}>필드 삭제</StyledToolButton>
          <StyledToolButton onClick={removeAllField}>전체 필드 삭제</StyledToolButton>
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="이미지 추가" desc="jpg, png" width={130} />
        <ToolCenterWrap>
          <Upload {...props}>
            <StyledToolButton icon={<UploadOutlined />}>이미지 업로드</StyledToolButton>
          </Upload>
        </ToolCenterWrap>
      </Tool>
      <Tool>
        <PageSubTitle title="페이지 확대/축소" />
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
  overflow: auto;
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
