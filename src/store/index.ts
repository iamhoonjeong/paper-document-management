import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loading from './loading';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['loading'],
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  loading,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
