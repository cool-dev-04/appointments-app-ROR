import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const EngineersURL = '/api/v1/consultations';
const token = JSON.parse(localStorage.getItem('token'));
const headers = {
  Authorization: token,
};

const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const response = await axios.get(EngineersURL, { headers })
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

const addReservations = createAsyncThunk('reservations/addReservations', async (reservation) => {
  const response = await axios.post(EngineersURL, reservation, { headers })
    .then(({ data }) => data).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return response;
});

export { fetchReservations, addReservations };
