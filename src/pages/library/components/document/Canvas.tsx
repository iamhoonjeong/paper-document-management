/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

import img from './img.png';

const Canvas = () => {
  let width = 2230;
  let height = 3508;
  let canvasContainer = document.querySelector('.canvas-container');
  const zoomValue = useSelector(
    (state: RootState) => state.zoomValue.value / 100,
  );

  // set canvas
  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();
  useEffect(() => {
    setCanvas(
      new fabric.Canvas('canvas', {
        backgroundColor: '#e2e2e2',
      }),
    );
  }, []);

  // zoom & out action
  useEffect(() => {
    width = width * zoomValue;
    height = height * zoomValue;

    const lowerCanvas = document.querySelector('.lower-canvas');
    const upperCanvas = document.querySelector('.upper-canvas');

    canvasContainer?.setAttribute(
      'style',
      `width: ${width}px; height: ${height}px; position: relative; user-select: none`,
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

  // canvas elements
  useEffect(() => {
    canvas?.setWidth(width);
    canvas?.setHeight(height);

    // background image setting
    canvas?.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX: width / 1000,
      scaleY: height / 800,
    });

    console.log(img);
    let text = new fabric.Text('Field', { left: 100, top: 100 });
    let rect = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'green',
      width: 100,
      height: 100,
    });
    canvas?.on('mouse:up', (options: any) => {
      if (options) {
        console.log(options.target);
      }
    });
    canvas?.add(rect, text);
    canvas?.renderAll();
  }, [canvas]);

  // inside canvas container canvas width, height 100%
  useEffect(() => {}, [zoomValue, canvas]);

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Canvas;
