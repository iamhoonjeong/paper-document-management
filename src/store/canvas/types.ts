import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CanvasAction = ActionType<typeof actions>;

export type Canvas = {
  image: any;
};

export type CanvasState = Canvas;
