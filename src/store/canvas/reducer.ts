import { createReducer } from 'typesafe-actions';
import { CanvasAction, CanvasState } from './types';
import { SET_IMAGE } from './actions';

const initialState: CanvasState = {
  image: null,
};

const loading = createReducer<CanvasState, CanvasAction>(initialState, {
  [SET_IMAGE]: (state, action) => ({ image: action.payload }),
});

export default loading;
