import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loading from './loading';
import canvas from './canvas';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['loading'],
  blacklist: ['loading', 'canvas'],
};

const rootReducer = combineReducers({
  loading,
  canvas,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
