import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productsApi from 'api/productsApi';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
