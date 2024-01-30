import { configureStore } from '@reduxjs/toolkit';
import engineersReducer from './engineers/engineersSlice';

const store = configureStore({
  reducer: {
    engineers: engineersReducer,
  },
});

export default store;
