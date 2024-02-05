import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const engineerDetailsSlice = createSlice({
  name: 'engineerDetails',
  initialState,
  reducers: {
    setEngineerDetails: ((state, action) => action.payload),
  },

});

export const { setEngineerDetails } = engineerDetailsSlice.actions;
export default engineerDetailsSlice.reducer;
