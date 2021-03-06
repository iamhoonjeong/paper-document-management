import { createReducer } from 'typesafe-actions';
import { LoadingAction, LoadingState } from './types';
import { SET_LOADING } from './actions';

const initialState: LoadingState = {
  onLoading: false,
};

const loading = createReducer<LoadingState, LoadingAction>(initialState, {
  [SET_LOADING]: (state) => ({ onLoading: !state.onLoading }),
});

export default loading;
