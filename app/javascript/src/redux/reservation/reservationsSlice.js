import { createSlice } from '@reduxjs/toolkit';
import { addReservations, fetchReservations } from './reservationsThunk';

const initialState = {
  reservations: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.split('/')[0] === 'reservations' && action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.split('/')[0] === 'reservations' && action.type.endsWith('/rejected');

const reservationsSlice = createSlice({
  name: 'Reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload.data,
        status: 'succeeded',
        message: action.payload.message,
      }))
      .addCase(addReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: [...state.reservations, action.payload.data],
        status: 'succeeded',
        message: action.payload.message,
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
