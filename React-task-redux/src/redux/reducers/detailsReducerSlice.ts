import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { GetArticles } from '../../components/interfaces';
import axiosInstance from '../../api';

export const getDataDetailsThunk = createAsyncThunk(
  'details-page/getDataDetails',
  async function ({ encodedUri }: { encodedUri: string }, { dispatch }) {
    try {
      dispatch(setIsLoading(true));
      const response: AxiosResponse<GetArticles> = await axiosInstance.get(encodedUri);
      dispatch(setData(response.data.articles));
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  },
);

const detailsReducerSlice = createSlice({
  name: 'details-page',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [getDataDetailsThunk.fulfilled.type]: function () {},
  },
});

export default detailsReducerSlice.reducer;
export const { setData, setIsLoading } = detailsReducerSlice.actions;
