import { createReducer } from 'typesafe-actions';
import { CanvasAction, CanvasState } from './types';
import { SET_ZOOMVALUE, SET_IMAGE, SET_WIDTH, SET_HEIGHT } from './actions';

const initialState: CanvasState = {
  zoomValue: 100,
  image: null,
  width: 0,
  height: 0,
};

const loading = createReducer<CanvasState, CanvasAction>(initialState, {
  [SET_ZOOMVALUE]: (state, action) => ({ ...state, zoomValue: action.payload }),
  [SET_IMAGE]: (state, action) => ({
    ...state,
    image: action.payload,
    zoomValue: 100,
  }),
  [SET_WIDTH]: (state, action) => ({
    ...state,
    width: action.payload,
    zoomValue: 100,
  }),
  [SET_HEIGHT]: (state, action) => ({
    ...state,
    height: action.payload,
    zoomValue: 100,
  }),
});

export default loading;
