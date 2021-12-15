import { createAction } from 'typesafe-actions';

export const SET_CREATE_TITLE_INPUT = 'library/SET_CREATE_TITLE_INPUT';

export const setCreateTitleInput = createAction(SET_CREATE_TITLE_INPUT)<string>();
