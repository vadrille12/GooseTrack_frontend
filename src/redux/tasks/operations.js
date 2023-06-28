import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/tasks');
      // console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/tasks', task);
      // console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
