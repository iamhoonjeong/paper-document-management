import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CanvasAction = ActionType<typeof actions>;

export type Canvas = {
  zoomValue: number;
  image: any;
  width: number;
  height: number;
};

export type CanvasState = Canvas;
