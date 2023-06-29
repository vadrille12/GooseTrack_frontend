import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refresh, updateUser } from './operations';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    [register.pending]: state => {
      state.isLoading = true;
    },

    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    },

    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    [login.pending]: state => {
      state.isLoading = true;
    },

    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    },

    [logout.fulfilled]: state => {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [logout.pending]: state => {
      state.isLoading = true;
    },

    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [refresh.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = payload;
    },

    [refresh.pending]: state => {
      state.isLoading = true;
    },

    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },

    [updateUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },

  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});
