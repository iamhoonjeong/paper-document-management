import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fabric } from 'fabric';
import { Input, message } from 'antd';
import { CopyOutlined, SwapOutlined } from '@ant-design/icons';
import { setActiveField, unSetActiveField, addField } from '../../../store/canvas';

type FieldProps = {
  canvas: fabric.Canvas | undefined;
  titleNumber: number;
  id: number;
  active?: boolean;
  fieldCount: number;
  setFieldCount: React.Dispatch<number>;
};

const Field = ({ canvas, titleNumber, active, id, fieldCount, setFieldCount }: FieldProps) => {
  const dispatch = useDispatch();

  // scroll moving when create field position
  useEffect(() => {
    const field: HTMLDivElement | null = document.querySelector(`.field-${id}`);
    field?.scrollIntoView({ behavior: 'smooth' });
  }, [titleNumber, id]);

  const onFieldHighlight = useCallback(() => {
    fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
    fabric.Object.prototype.borderColor = '#ff4d4f';
    fabric.Object.prototype.borderDashArray = [5, 5];

    dispatch(unSetActiveField());
    dispatch(setActiveField(id));

    let fieldObjects: any = canvas?.getObjects();
    let selectField;

    for (let i = 0; i < fieldObjects.length; i++) {
      if (fieldObjects[i].data.id === id) {
        selectField = fieldObjects[i];
      }
    }

    canvas?.setActiveObject(selectField);
    canvas?.renderAll();
  }, [dispatch, canvas, id]);

  const onFieldCopy = useCallback(
    (e) => {
      let isManyActiveFields: fabric.Object[] | undefined = canvas?.getActiveObjects();
      if (isManyActiveFields) {
        if (isManyActiveFields.length !== 1) {
          message.info('그룹 선택 시 필드 복사를 할 수 없습니다');
          return;
        }
      }

      fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
      fabric.Object.prototype.borderColor = '#ff4d4f';
      fabric.Object.prototype.borderDashArray = [5, 5];

      e.stopPropagation();

      dispatch(unSetActiveField());
      dispatch(addField(fieldCount));

      let fieldObjects: any = canvas?.getObjects();
      let selectField;

      for (let i = 0; i < fieldObjects.length; i++) {
        if (fieldObjects[i].data.id === id) {
          selectField = fieldObjects[i];
        }
      }

      let rect = new fabric.Rect({
        width: selectField.width * selectField.scaleX,
        height: selectField.height * selectField.scaleY,
        left: selectField.left + (selectField.width * selectField.scaleX + 20),
        top: selectField.top,
        fill: 'rgba(25, 144, 255, 0.3)',
        data: {
          id: fieldCount,
        },
      });

      canvas?.add(rect);
      setTimeout(() => {
        canvas?.setActiveObject(rect);
        canvas?.renderAll();
        dispatch(unSetActiveField());
        dispatch(setActiveField(fieldCount));
      }, 0);

      setFieldCount(fieldCount + 1);
    },
    [canvas, id, fieldCount, setFieldCount, dispatch],
  );

  return (
    <StyledField active={active} className={`field-${id}`} onClick={onFieldHighlight}>
      <FieldHeaderWrap active={active}>
        <FieldHeaderLeft>
          <FieldTitle>
            <FieldIcon />
            필드 {titleNumber}
          </FieldTitle>
        </FieldHeaderLeft>
        <FieldHeaderRight>
          <CopyOutlined style={{ fontSize: '12px' }} onClick={onFieldCopy} />
        </FieldHeaderRight>
      </FieldHeaderWrap>
      <FieldContentWrap>
        <FieldContentName>필드 이름</FieldContentName>
        <FieldContentNameInput placeholder={`필드 ${titleNumber}`} />
      </FieldContentWrap>
    </StyledField>
  );
};

export default React.memo(Field);

const StyledField = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 120px;
  border: ${(props) => (props.active ? '1px solid #1890ff' : '1px solid #e2e2e2')};
  margin-top: 16px;
`;

const FieldHeaderWrap = styled.div<{ active?: boolean }>`
  height: 46px;
  border-bottom: ${(props) => (props.active ? '1px solid #1890ff' : '1px solid #e2e2e2')};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldHeaderLeft = styled.div``;

const FieldHeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const FieldTitle = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;

const FieldIcon = styled(SwapOutlined)`
  transform: rotate(90deg);
  margin-right: 8px;
`;

const FieldContentWrap = styled.div`
  padding: 20px;
  height: 72px;
  display: flex;
  align-items: center;
`;

const FieldContentName = styled.div`
  white-space: nowrap;
`;

const FieldContentNameInput = styled(Input)`
  font-size: 12px;
  margin-left: 12px;
`;
