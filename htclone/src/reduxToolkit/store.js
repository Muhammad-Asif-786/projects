import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/Authslice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
