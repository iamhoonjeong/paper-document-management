import { createReducer } from 'typesafe-actions';
import { LibraryAction, LibraryState } from './types';
import { SET_CREATE_TITLE_INPUT } from './actions';

const initialState: LibraryState = {
  createTitle: '',
};

const library = createReducer<LibraryState, LibraryAction>(initialState, {
  [SET_CREATE_TITLE_INPUT]: (state, action) => ({ ...state, createTitle: action.payload }),
});

export default library;
