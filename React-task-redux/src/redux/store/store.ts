import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSlice from './../reducers/mainReducerSlice';
import dashboardSlice from './../reducers/dashboardReducerSlice';
import detailsReducerSlice from './../reducers/detailsReducerSlice';

const rootReducer = combineReducers({
  mainSlice,
  dashboardSlice,
  detailsReducerSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
