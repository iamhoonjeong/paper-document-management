import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LibraryAction = ActionType<typeof actions>;

export type Library = {
  createTitle: string;
};

export type LibraryState = Library;
