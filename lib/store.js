import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import thunk from 'redux-thunk';

import app from './appSlice';
import selectedProduct from './selectedProductSlice';
import editor from './editorSlice';

import { productApi } from './productApi';

const reducers = combineReducers({
  // Add the generated reducer as a specific top-level slice
  [productApi.reducerPath]: productApi.reducer,
  app,
  selectedProduct,
  editor
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer, 
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({ serializableCheck: false }).concat(productApi.middleware), thunk]
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
