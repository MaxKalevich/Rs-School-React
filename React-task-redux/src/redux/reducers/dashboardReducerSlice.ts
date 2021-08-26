import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axiosInstance, { API_KEY } from '../../api';

import { IDashboardState, TFetchArticles } from '../interfaces/interfaces';
import { GetArticles } from '../../components/interfaces';
import { SortType } from '../../components/types';

import { setLoading, setNotFound, setStatusError } from "./mainReducerSlice";

export const fetchArticles = createAsyncThunk(
  'main/fetchArticles',
  async function (
    { search, sorted, pageSize, page, language }: TFetchArticles,
    { rejectWithValue, dispatch },
  ) {
try {
  const response: AxiosResponse<GetArticles> = await axiosInstance.get(
    `v2/everything?q=${search}&sortBy=${sorted}&pageSize=${pageSize}
        &page=${page}&language=${language}&apiKey=${API_KEY}`,
  );
  if (response.data.totalResults === 0) {
    dispatch(setNotFound(true));
  } else {
    dispatch(setNotFound(false));
    dispatch(setDataActionCreator(response.data.articles));
    dispatch(setTotalResultsActionCreator(response.data.totalResults));
  }
} catch(e) {
  dispatch(setStatusError(true));
 return rejectWithValue(e.message);
} finally {
  dispatch(setLoading());
}
  },
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    searchData: [],
    search: '',
    page: '1',
    language: 'en',
    sorted: SortType.PUBLISHED_AT,
    pageSize: 10,
    noValueInField: true,
    totalResults: 1,
  } as IDashboardState,
  reducers: {
    setDataActionCreator(state, action) {
      state.searchData = action.payload;
    },
    setSearchActionCreator(state, action) {
      state.search = action.payload;
    },
    setPageActionCreator(state, action) {
      state.page = action.payload;
    },
    setLanguageActionCreator(state, action) {
      state.language = action.payload;
    },
    setSortedActionCreator(state, action) {
      state.sorted = action.payload;
    },
    setPageSizeActionCreator(state, action) {
      state.pageSize = action.payload;
    },
    setNoValueInFieldActionCreator(state, action) {
      state.noValueInField = action.payload;
    },
    setTotalResultsActionCreator(state, action) {
      state.totalResults = action.payload;
    },
  },
  extraReducers: {
    [fetchArticles.pending.type]: (state) => {
      console.log('sss');
    },
    [fetchArticles.fulfilled.type]: (state, action) => {

    },
  },
});

export default dashboardSlice.reducer;
export const {setDataActionCreator, setSearchActionCreator, setPageActionCreator,
  setLanguageActionCreator, setTotalResultsActionCreator, setPageSizeActionCreator,
  setSortedActionCreator, setNoValueInFieldActionCreator} = dashboardSlice.actions;
