import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refresh } from './operations';

const initialState = {
  user: null,
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
      state.user = '';
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

    [refresh.fulfilled]: state => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [refresh.pending]: state => {
      state.isLoading = true;
    },

    [refresh.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    // [getUserInfo.fulfilled]: (state, { payload }) => {
    //   state.user = payload;
    //   state.isLoading = false;
    //   state.error = null;
    // },

    // [getUserInfo.pending]: state => {
    //   state.isLoading = true;
    // },

    // [getUserInfo.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = false;
    //   state.error = payload;
    // },
  },

  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});