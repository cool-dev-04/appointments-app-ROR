import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const EngineersURL = '/api/v1/reservations';

const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const response = await axios.get(EngineersURL)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addReservations = createAsyncThunk('reservations/addReservations', async (engineer) => {
  const response = await axios.post(EngineersURL, engineer)
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchReservations, addReservations };
