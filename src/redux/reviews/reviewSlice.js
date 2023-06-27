import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReviews,
  addReview,
  editReview,
  deleteReview,
} from './operations';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    isLoading: false,
    error: null,
    isFeedback: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews = [...state.reviews, action.payload];
        state.isLoading = false;
        state.isFeedback = true;
        state.error = null;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isFeedback = false;
        state.error = action.payload;
      })
      .addCase(deleteReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(
          review => review.id !== action.payload.id
        );
        state.isLoading = false;
        state.isFeedback = false;
        state.error = null;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editReview.pending, state => {
        state.isLoading = true;
      })
      .addCase(editReview.fulfilled, (state, action) => {
        const index = state.reviews.findIndex(
          review => review.id === action.payload.id
        );
        state.reviews.splice(index, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { addReviews, deleteReviews } = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;
