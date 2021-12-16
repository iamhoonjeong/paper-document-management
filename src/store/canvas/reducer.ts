import { createReducer } from 'typesafe-actions';
import { CanvasAction, CanvasState } from './types';
import {
  SET_ZOOMVALUE,
  SET_IMAGE,
  SET_WIDTH,
  SET_HEIGHT,
  ADD_FIELD,
  REMOVE_FIELD,
  REMOVE_ALL_FIELD,
  SET_ACTIVE_FIELDS,
  UNSET_ACTIVE_FIELDS,
} from './actions';

const initialState: CanvasState = {
  zoomValue: 100,
  image: null,
  width: 0,
  height: 0,
  fields: [],
  activeFields: [],
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
  [ADD_FIELD]: (state, action) => ({
    ...state,
    fields: state.fields.concat({ id: action.payload }),
  }),
  [REMOVE_FIELD]: (state, action) => ({
    ...state,
    fields: state.fields.filter((fields: any) => {
      return fields.id !== action.payload;
    }),
  }),
  [REMOVE_ALL_FIELD]: (state) => ({
    ...state,
    fields: [],
  }),
  [SET_ACTIVE_FIELDS]: (state, action) => ({
    ...state,
    activeFields: state.activeFields.concat(action.payload),
  }),
  [UNSET_ACTIVE_FIELDS]: (state) => ({
    ...state,
    activeFields: [],
  }),
});

export default loading;
