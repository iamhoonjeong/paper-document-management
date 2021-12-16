/* eslint-disable */
import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import {
  setCanvasWidth,
  setCanvasHeight,
  setCanvasImage,
  removeAllField,
  setActiveField,
  unSetActiveField,
} from '../../../store/canvas';
import { useHistory } from 'react-router-dom';

type CanvasProps = {
  canvas: fabric.Canvas | undefined;
  setCanvas: React.Dispatch<fabric.Canvas | undefined>;
};

const Canvas = ({ canvas, setCanvas }: CanvasProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let canvasContainer = document.querySelector('.canvas-container');
  let canvasWidth = 0;
  let canvasHeight = 0;

  let canvasWidthProps = useSelector((state: RootState) => state.canvas.width);
  let canvasHeightProps = useSelector((state: RootState) => state.canvas.height);
  const canvasImage = useSelector((state: RootState) => state.canvas.image);
  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue / 100);

  // set canvas
  useEffect(() => {
    if (canvas) return;

    setCanvas(
      new fabric.Canvas('canvas', {
        backgroundColor: '#fff',
        selectionColor: 'rgba(30, 35, 46, 0.3)',
      }),
    );
  }, []);

  // set canvas size
  useEffect(() => {
    canvas?.setWidth(canvasWidth);
    canvas?.setHeight(canvasHeight);
  }, [canvas]);

  // set canvas & background image
  useEffect(() => {
    if (!canvasImage) return;

    fabric.Group.prototype.hasControls = false;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = '#1890ff';
    fabric.Object.prototype.lockRotation = true;
    fabric.Object.prototype.cornerSize = 6;
    fabric.Object.prototype.borderScaleFactor = 2;
    fabric.Object.prototype.borderDashArray = [5, 5];
    fabric.Object.prototype.borderColor = '#ff4d4f';

    if (canvasImage) {
      let reader: any = new FileReader();
      reader.readAsDataURL(canvasImage);

      reader.onload = () => {
        canvas?.setBackgroundImage(reader.result, canvas.renderAll.bind(canvas), {
          scaleX: 1,
          scaleY: 1,
        });

        setTimeout(() => {
          let image = new Image();
          image.src = reader.result;
          const { width, height } = image;

          canvas?.setWidth(width);
          canvas?.setHeight(height);
          dispatch(setCanvasWidth(width));
          dispatch(setCanvasHeight(height));

          // set canvas border size
          const canvasBorder = document.querySelector('#canvas-border');
          canvasBorder?.setAttribute(
            'style',
            `width: ${width + 40}px; height: ${height + 40}px; background-color: #dee2e6; padding: 20px;`,
          );
        }, 0);
      };
    }

    // set select group border & active fields & field position scroll moving
    canvas?.on('selection:created', (e) => {
      const fields = canvas.getActiveObjects();

      if (!fields) return;

      dispatch(unSetActiveField());
      for (let i = 0; i < fields.length; i++) {
        dispatch(setActiveField(fields[i].data.id));
      }

      if (fields.length >= 2) {
        fabric.Group.prototype.borderColor = '#1890ff';
        fabric.Group.prototype.borderDashArray = [0];
        fabric.Object.prototype.borderColor = '#1890ff';
        fabric.Object.prototype.borderDashArray = [0];
      } else if (fields.length === 1) {
        fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
        fabric.Object.prototype.borderColor = '#ff4d4f';
        fabric.Object.prototype.borderDashArray = [5, 5];

        const fieldId = fields[0].data.id;
        const fieldCard: HTMLDivElement | null = document.querySelector(`.field-${fieldId}`);
        fieldCard?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // set select group border & after deselect border & active fields & field position scroll moving
    canvas?.on('mouse:down', (e) => {
      const fields = canvas.getActiveObjects();

      if (!fields) return;

      dispatch(unSetActiveField());
      for (let i = 0; i < fields.length; i++) {
        dispatch(setActiveField(fields[i].data.id));
      }

      if (fields.length >= 2) {
        fabric.Group.prototype.borderColor = '#1890ff';
        fabric.Group.prototype.borderDashArray = [0];
        fabric.Object.prototype.borderColor = '#1890ff';
        fabric.Object.prototype.borderDashArray = [0];
      } else if (fields.length === 1) {
        fabric.Group.prototype.borderColor = 'rgba(0, 0, 0, 0)';
        fabric.Object.prototype.borderColor = '#ff4d4f';
        fabric.Object.prototype.borderDashArray = [5, 5];

        const fieldId = fields[0].data.id;
        const fieldCard: HTMLDivElement | null = document.querySelector(`.field-${fieldId}`);
        fieldCard?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // active fields
    canvas?.on('object:added', (e: any) => {
      dispatch(setActiveField(e.target.data.id));
    });

    // unset active fields
    canvas?.on('selection:cleared', (e) => {
      dispatch(unSetActiveField());
    });
  }, [canvasImage]);

  // zoom & out action
  useEffect(() => {
    if (!canvasImage) return;

    canvasWidth = canvasWidthProps *= zoomValue;
    canvasHeight = canvasHeightProps *= zoomValue;

    const canvasBorder = document.querySelector('#canvas-border');
    const lowerCanvas = document.querySelector('.lower-canvas');
    const upperCanvas = document.querySelector('.upper-canvas');

    // change canvas border size if zoomValue change
    canvasBorder?.setAttribute(
      'style',
      canvasWidth !== 0
        ? `width: ${canvasWidth + 40}px; height: ${canvasHeight + 40}px; background-color: #dee2e6; padding: 20px;`
        : `width: 0px; height: 0px;`,
    );
    lowerCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none`,
    );
    upperCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none; cursor: default`,
    );
    canvasContainer?.setAttribute(
      'style',
      `width: ${canvasWidth}px; height: ${canvasHeight}px; position: relative; user-select: none`,
    );
  }, [zoomValue]);

  // exit canvas confirm
  useEffect(() => {
    const unblock = history.block((location, action) => {
      if (action && location.pathname !== '/library/document/page/create') {
        if (confirm('편집을 종료하시겠어요?')) {
          dispatch(setCanvasImage(null));
          dispatch(setCanvasWidth(0));
          dispatch(setCanvasHeight(0));
          dispatch(removeAllField());
          return;
        } else {
          return false;
        }
      }
    });

    return () => unblock();
  }, []);

  return (
    <>
      <div id="canvas-border">
        <canvas id="canvas"></canvas>
      </div>
    </>
  );
};

export default Canvas;
