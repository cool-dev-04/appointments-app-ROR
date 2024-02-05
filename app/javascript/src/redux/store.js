import { configureStore } from '@reduxjs/toolkit';
import engineersReducer from './engineers/engineersSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    engineers: engineersReducer,
    auth: authReducer,
  },
});

export default store;
