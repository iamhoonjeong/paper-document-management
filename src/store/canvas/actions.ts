import { createAction } from 'typesafe-actions';

export const SET_ZOOMVALUE = 'canvas/SET_ZOOMVALUE';
export const SET_IMAGE = 'canvas/SET_IMAGE';
export const SET_WIDTH = 'canvas/SET_WIDTH';
export const SET_HEIGHT = 'canvas/SET_HEIGHT';
export const ADD_FIELD = 'canvas/ADD_FIELD';
export const REMOVE_FIELD = 'canvas/REMOVE_FIELD';
export const REMOVE_ALL_FIELD = 'canvas/REMOVE_ALL_FIELD';
export const SET_ACTIVE_FIELDS = 'canvas/SET_ACTIVE_FIELDS';
export const UNSET_ACTIVE_FIELDS = 'canvas/UNSET_ACTIVE_FIELDS';

export const setZoomValue = createAction(SET_ZOOMVALUE)<any>();
export const setCanvasImage = createAction(SET_IMAGE)<any>();
export const setCanvasWidth = createAction(SET_WIDTH)<any>();
export const setCanvasHeight = createAction(SET_HEIGHT)<any>();
export const addField = createAction(ADD_FIELD)<any>();
export const removeField = createAction(REMOVE_FIELD)<any>();
export const removeAllField = createAction(REMOVE_ALL_FIELD)();
export const setActiveField = createAction(SET_ACTIVE_FIELDS)<any>();
export const unSetActiveField = createAction(UNSET_ACTIVE_FIELDS)();
