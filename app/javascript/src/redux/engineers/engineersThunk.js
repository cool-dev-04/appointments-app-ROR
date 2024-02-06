import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const EngineersURL = '/api/v1/engineers';

const fetchEngineers = createAsyncThunk('engineers/fetchEngineers', async () => {
  const response = await axios.get(EngineersURL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addEngineer = createAsyncThunk('engineers/AddEngineer', async (engineer) => {
  const response = await axios.post(EngineersURL, engineer)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchEngineers, addEngineer };
