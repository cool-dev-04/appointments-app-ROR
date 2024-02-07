import { createSlice } from '@reduxjs/toolkit';
import { addReservations, fetchReservations } from './reservationsThunk';

const initialState = {
  engineers: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const reservationsSlice = createSlice({
  name: 'Reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        status: 'succeeded',
      }))
      .addCase(addReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload],
        status: 'succeeded',
        message: action.payload.response,
      }))

    // for all pending actions that has the same callback functions
      .addMatcher(isPendingAction, (state) => ({ ...state, status: 'loading' }))

    // for all rejected actions that has the similar callback functions
      .addMatcher(isRejectedAction, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});

export const reservationsState = (state) => state.reservations;
export { fetchReservations, addReservations };
export default reservationsSlice.reducer;
