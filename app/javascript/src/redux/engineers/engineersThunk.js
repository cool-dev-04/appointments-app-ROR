import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = '/api/v1/engineers';

const fetchEngineers = createAsyncThunk('greetings/fetchEngineers', async () => {
  const response = await axios.get(URL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export default fetchEngineers;
