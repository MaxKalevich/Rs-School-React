import {
  IS_LOADING,
  ERROR,
  NOT_FOUND,
} from '../actions/actionsMainReducer/actionsMainReducer';
import { createAction } from '@reduxjs/toolkit';

// export const loadingActionCreator = () => ({ type: IS_LOADING });
export const loadingActionCreator = createAction(IS_LOADING);

// export const errorActionCreator = (payload: boolean) => ({ type: ERROR, payload });
export const errorActionCreator = createAction(ERROR, (payload: boolean) => {
  return {
    payload,
  };
});

export const notFoundActionCreator = createAction(NOT_FOUND, (payload: boolean) => {
  return {
    payload,
  };
});
