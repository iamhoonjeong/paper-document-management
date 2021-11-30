import { createAction } from 'typesafe-actions';

export const SET_ZOOMVALUE = 'zoomValue/SET_ZOOMVALUE';

export const setZoomValue = createAction(SET_ZOOMVALUE)<number>();
