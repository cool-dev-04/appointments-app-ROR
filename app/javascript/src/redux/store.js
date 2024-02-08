import { configureStore } from '@reduxjs/toolkit';
import engineersReducer from './engineers/engineersSlice';
import engineerDetailsReducer from './engineers/engineerDetailsSlice';
import authReducer from './auth/authSlice';
import reservationsReducer from './reservation/reservationsSlice';

const store = configureStore({
  reducer: {
    engineers: engineersReducer,
    engineerDetails: engineerDetailsReducer,
    auth: authReducer,
    reservations: reservationsReducer,
  },
});

export default store;
