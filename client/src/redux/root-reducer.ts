import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import itemReducer from './item/reducer';
import userReducer from './user/reducer';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemReducer', 'userReducer'],
};

const rootReducer = combineReducers({
  itemReducer,
  userReducer,
});

export default persistReducer(persistConfig, rootReducer);
