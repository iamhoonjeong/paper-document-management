import { createReducer } from 'typesafe-actions';
import { ZoomValueAction, ZoomValueState } from './types';
import { SET_ZOOMVALUE } from './actions';

const initialState: ZoomValueState = {
  value: 100,
};

const zoomValue = createReducer<ZoomValueState, ZoomValueAction>(initialState, {
  [SET_ZOOMVALUE]: (state, action) => ({ value: action.payload }),
});

export default zoomValue;
