import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import rootReducers from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducers,
  middleware: middlewares,
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
