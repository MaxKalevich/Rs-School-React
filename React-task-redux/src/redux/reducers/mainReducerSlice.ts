import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    loading: false,
    statusError: false,
    notFound: false,
    status: 'loading',
  },
  reducers: {
    setLoading(state) {
      state.loading = !state.loading;
    },
    setStatusError(state, action) {
      state.statusError = action.payload;
    },
    setNotFound(state, action) {
      state.notFound = action.payload;
    },
  },
});

export const { setLoading, setStatusError, setNotFound } = mainSlice.actions;

export default mainSlice.reducer;
