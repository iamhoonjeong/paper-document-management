import { createAction } from 'typesafe-actions';

export const SET_CANVAS = 'canvas/SET_CANVAS';
export const SET_ZOOMVALUE = 'canvas/SET_ZOOMVALUE';
export const SET_IMAGE = 'canvas/SET_IMAGE';
export const SET_WIDTH = 'canvas/SET_WIDTH';
export const SET_HEIGHT = 'canvas/SET_HEIGHT';
export const INSERT_FIELD = 'canvas/INSERT_FIELD';

export const setCanvas = createAction(SET_CANVAS)<any>();
export const setZoomValue = createAction(SET_ZOOMVALUE)<any>();
export const setCanvasImage = createAction(SET_IMAGE)<any>();
export const setCanvasWidth = createAction(SET_WIDTH)<any>();
export const setCanvasHeight = createAction(SET_HEIGHT)<any>();
export const insertField = createAction(INSERT_FIELD)<any>();
