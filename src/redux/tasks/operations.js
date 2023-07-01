import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/tasks');
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
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/tasks/${taskId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { _id, title, start, end, priority, date, category },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`/api/tasks/${_id}`, {
        title,
        start,
        end,
        priority,
        date,
        category,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
