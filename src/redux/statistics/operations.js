import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-api-l50t.onrender.com';

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('api/statistics', { date: body });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
