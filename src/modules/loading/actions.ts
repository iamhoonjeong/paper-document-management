import { createAction } from 'typesafe-actions';

export const SET_LOADING = 'loading/SET_LOADING';

export const setLoading = createAction(SET_LOADING)();
