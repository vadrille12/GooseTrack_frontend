import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    statistics: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStatistics.pending, handlePending)
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.statistics = action.payload;
      })
      .addCase(fetchStatistics.rejected, handleRejected);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
