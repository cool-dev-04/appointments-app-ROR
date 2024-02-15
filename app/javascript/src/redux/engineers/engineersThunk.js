import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const EngineersURL = '/api/v1/engineers';
const headers = () => ({ headers: { Authorization: JSON.parse(localStorage.getItem('token')) } });

const fetchEngineers = createAsyncThunk('engineers/fetchEngineers', async () => {
  const response = await axios.get(EngineersURL, headers())
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response.status === 401) {
        // handle token expiration
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addEngineer = createAsyncThunk('engineers/AddEngineer', async (engineer) => {
  const response = await axios.post(EngineersURL, engineer, headers())
    .then(({ data }) => data).catch((error) => {
      if (error.response.status === 401) {
        // handle token expiration
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const deleteEngineer = createAsyncThunk('engineers/deleteEngineer', async (engineerId) => {
  const response = await axios.delete(`${EngineersURL}/${engineerId}`, headers())
    .then(({ data }) => data).catch((error) => {
      if (error.response.status === 401) {
        // handle token expiration
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
      }
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchEngineers, addEngineer, deleteEngineer };
