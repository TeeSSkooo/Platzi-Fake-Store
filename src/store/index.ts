import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productsApi from 'api/productsApi';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productsSlice';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  user: userReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
