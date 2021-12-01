import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loading from './loading';
import zoomValue from './zoomValue';
import canvas from './canvas';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['loading'],
  blacklist: ['loading', 'zoomValue', 'canvas'],
};

const rootReducer = combineReducers({
  loading,
  zoomValue,
  canvas,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
