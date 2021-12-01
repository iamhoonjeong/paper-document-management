import { createAction } from 'typesafe-actions';

export const SET_IMAGE = 'canvas/SET_IMAGE';

export const setCanvasImage = createAction(SET_IMAGE)<any>();
