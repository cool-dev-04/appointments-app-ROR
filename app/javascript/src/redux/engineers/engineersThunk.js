import axios from 'axios';
import { createAsyncThunk, rejectWithValue } from '@reduxjs/toolkit';
// import { Navigate } from 'react-router-dom';

const EngineersURL = '/api/v1/engineers';
const token = JSON.parse(localStorage.getItem('token'));
const headers = {
  'Content-Type': 'application/json',
  Authorization: token,
};

const fetchEngineers = createAsyncThunk('engineers/fetchEngineers', async () => {
  const response = await axios.get(EngineersURL, { headers })
    .then(({ data }) => data).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return { message: 'Unauthorized' };
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addEngineer = createAsyncThunk('engineers/AddEngineer', async (engineer) => {
  const response = await axios.post(EngineersURL, { headers }, engineer)
    .then(({ data }) => data).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return { message: 'Unauthorized' };
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchEngineers, addEngineer };
