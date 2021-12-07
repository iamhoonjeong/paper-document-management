/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { setCanvasWidth, setCanvasHeight } from '../../../../store/canvas/actions';

const Canvas = () => {
  const dispatch = useDispatch();

  let canvasContainer = document.querySelector('.canvas-container');
  let canvasWidth = 0;
  let canvasHeight = 0;

  let canvasWidthProps = useSelector((state: RootState) => state.canvas.width);
  let canvasHeightProps = useSelector((state: RootState) => state.canvas.height);
  const canvasImage = useSelector((state: RootState) => state.canvas.image);
  const zoomValue = useSelector((state: RootState) => state.canvas.zoomValue / 100);
  const fields = useSelector((state: RootState) => state.canvas.fields);

  // set canvas
  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();
  useEffect(() => {
    setCanvas(
      new fabric.Canvas('canvas', {
        backgroundColor: '#fff',
        selectionColor: 'rgba(30, 35, 46, 0.3)',
      }),
    );
  }, []);

  // background image setting
  useEffect(() => {
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
        }, 0);
      };
    }
  }, [canvas, canvasImage]);

  // canvas settings
  useEffect(() => {
    fabric.Group.prototype.hasControls = false;
    canvas?.setWidth(canvasWidth);
    canvas?.setHeight(canvasHeight);

    // canvas events
    canvas?.on('before:selection:cleared', (options: any) => {
      // element sizes
      // console.log('width:', Math.round(options.target?.width * options.target?.zoomX));
      // console.log('height:', Math.round(options.target?.height * options.target?.zoomY));
      //
      // convert json
      // let json = JSON.stringify(canvas);
      // console.log(json);
    });

    canvas?.on('selection:created', (options: any) => {
      // console.log(options.selected);
    });
  }, [canvas]);

  // zoom & out action
  useEffect(() => {
    canvasWidth = canvasWidthProps *= zoomValue;
    canvasHeight = canvasHeightProps *= zoomValue;

    const lowerCanvas = document.querySelector('.lower-canvas');
    const upperCanvas = document.querySelector('.upper-canvas');

    canvasContainer?.setAttribute(
      'style',
      `width: ${canvasWidth}px; height: ${canvasHeight}px; position: relative; user-select: none`,
    );
    lowerCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none`,
    );
    upperCanvas?.setAttribute(
      'style',
      `position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; touch-action: none; user-select: none; cursor: default`,
    );
  }, [zoomValue]);

  // insert fields
  useEffect(() => {
    let rect = new fabric.Rect({
      width: 100,
      height: 100,
      left: 0,
      top: 0,
      fill: 'rgba(25, 144, 255, 0.3)',
      borderScaleFactor: 2,
      borderDashArray: [5, 5],
      borderColor: 'red',
      cornerColor: '#1990ff',
      cornerSize: 6,
      transparentCorners: false,
      lockRotation: true,
    });

    canvas?.add(rect);
    canvas?.renderAll();
  }, [fields]);

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Canvas;
