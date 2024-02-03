import { createSlice } from '@reduxjs/toolkit';
import fetchEngineers from './engineersThunk';

const initialState = {
  engineers: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const engineersSlice = createSlice({
  name: 'Engineers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchEngineers.fulfilled, (state, action) => ({
        ...state,
        engineers: action.payload,
        status: 'succeeded',
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

export const engineersState = (state) => state.engineers;
export { fetchEngineers };
export default engineersSlice.reducer;