import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loading from './loading';
import zoomValue from './zoomValue';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['loading'],
  blacklist: ['loading', 'zoomValue'],
};

const rootReducer = combineReducers({
  loading,
  zoomValue,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
