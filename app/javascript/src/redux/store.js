import { configureStore } from '@reduxjs/toolkit';
import engineersReducer from './engineers/engineersSlice';
import engineerDetailsReducer from './engineers/engineerDetailsSlice'

const store = configureStore({
  reducer: {
    engineers: engineersReducer,
    engineerDetails: engineerDetailsReducer,
  },
});

export default store;
