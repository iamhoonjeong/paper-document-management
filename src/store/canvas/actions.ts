import { createAction } from 'typesafe-actions';

export const SET_ZOOMVALUE = 'canvas/SET_ZOOMVALUE';
export const SET_IMAGE = 'canvas/SET_IMAGE';
export const SET_WIDTH = 'canvas/SET_WIDTH';
export const SET_HEIGHT = 'canvas/SET_HEIGHT';
export const ADD_FIELD = 'canvas/ADD_FIELD';

export const setZoomValue = createAction(SET_ZOOMVALUE)<any>();
export const setCanvasImage = createAction(SET_IMAGE)<any>();
export const setCanvasWidth = createAction(SET_WIDTH)<any>();
export const setCanvasHeight = createAction(SET_HEIGHT)<any>();
export const addField = createAction(ADD_FIELD)<any>();
