import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
