import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ZoomValueAction = ActionType<typeof actions>;

export type ZoomValue = {
  value: number;
};

export type ZoomValueState = ZoomValue;
