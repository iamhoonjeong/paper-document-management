import React, { useEffect } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  useEffect(() => {
    let canvas = new fabric.Canvas('canvas');

    // canvas.setWidth(width - 250 - 12 || 0);
    // canvas.setHeight(canvasWrap?.offsetHeight || 0);
    canvas.setWidth(2480 - 250 || 0);
    canvas.setHeight(3508 || 0);

    // let canvasWrap: HTMLElement | null = document.querySelector('#canvas-wrap');
    // let width: number = canvasWrap?.offsetWidth || 0;

    // let img = fabric.Image.fromURL('/images/temp.png', (img) => {
    //   console.log(img);
    //   canvas.add(img);
    // });
    let text = new fabric.Text('Field', { left: 100, top: 100 });
    let rect = new fabric.Rect({
      left: 0,
      top: 0,
      fill: 'green',
      width: 100,
      height: 100,
    });

    canvas.on('mouse:up', (options: any) => {
      if (options) {
        console.log(options.target);
      }
    });

    canvas.add(rect, text);
  });
  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default Canvas;
