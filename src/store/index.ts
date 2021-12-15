import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loading from './loading';
import canvas from './canvas';
import library from './library';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['loading'],
  blacklist: ['loading', 'canvas', 'library'],
};

const rootReducer = combineReducers({
  loading,
  canvas,
  library,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
