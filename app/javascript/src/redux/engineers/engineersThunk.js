import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const EngineersURL = '/api/v1/engineers';
// const token = JSON.parse(localStorage.getItem('token'));
// // const headers = {
// //   Authorization: token,
// // };

const fetchEngineers = createAsyncThunk('engineers/fetchEngineers', async (token) => {
  const response = await axios.get(EngineersURL, {
    headers: {
      Authorization: token,
    },
  })
    .then(({ data }) => data).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        return { message: 'Unauthorized' };
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addEngineer = createAsyncThunk('engineers/AddEngineer', async (engineer, token) => {
  const response = await axios.post(EngineersURL, {
    headers: {
      Authorization: token,
    },
  }, engineer)
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
