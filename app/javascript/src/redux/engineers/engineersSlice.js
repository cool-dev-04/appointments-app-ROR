import { createSlice } from '@reduxjs/toolkit';
import { addEngineer, fetchEngineers, deleteEngineer } from './engineersThunk';

const initialState = {
  engineers: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
  message: null,
};

const isPendingAction = (action) => action.type.split('/')[0] === 'engineers' && action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.split('/')[0] === 'engineers' && action.type.endsWith('/rejected');

const engineersSlice = createSlice({
  name: 'Engineers',
  initialState,
  reducers: {
    EngineersReset: (state) => ({
      ...state,
      status: 'idle',
      error: null,
      message: null,
    }),
  },
  extraReducers(builder) {
    builder

      .addCase(fetchEngineers.fulfilled, (state, action) => ({
        ...state,
        engineers: action.payload.data,
        status: 'succeeded',
        message: action.payload.message,
      }))
      .addCase(addEngineer.fulfilled, (state, action) => ({
        ...state,
        engineers: [...state.engineers, action.payload.data],
        status: 'succeeded',
        message: action.payload.message,
      }))
      .addCase(deleteEngineer.fulfilled, (state, action) => ({
        ...state,
        engineers: state.engineers.filter((engineer) => engineer.id !== action.payload.id),
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

export const engineersState = (state) => state.engineers;
export const { EngineersReset } = engineersSlice.actions;
export { fetchEngineers, addEngineer, deleteEngineer };
export default engineersSlice.reducer;
