import { configureStore, combineReducers } from '@reduxjs/toolkit';

import productsApi from 'api/productsApi';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
