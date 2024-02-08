import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const EngineersURL = '/api/v1/engineers';
// const token = JSON.parse(localStorage.getItem('token'));
const headers = () => ({ headers: { Authorization: JSON.parse(localStorage.getItem('token')) } });

const fetchEngineers = createAsyncThunk('engineers/fetchEngineers', async () => {
  const response = await axios.get(EngineersURL, headers())
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addEngineer = createAsyncThunk('engineers/AddEngineer', async (engineer) => {
  // console.log(token, 'token');
  const response = await axios.post(EngineersURL, engineer, headers())
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const deleteEngineer = createAsyncThunk('engineers/deleteEngineer', async (engineerId) => {
  const response = await axios.delete(`${EngineersURL}/${engineerId}`, headers())
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchEngineers, addEngineer, deleteEngineer };
