import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-api-l50t.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/login', credentials);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('api/auth/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue('Oooops... Cannot refresh user');
    }
    try {
      setToken(token);
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const getUserInfo = createAsyncThunk(
//   'auth/userInfo',
//   async (_, thunkAPI) => {
//     const savedToken = thunkAPI.getState().auth.token;
//     try {
//       setToken(savedToken);
//       const res = await axios('/user/info');
//       return res.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
