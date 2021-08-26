import { createAction } from '@reduxjs/toolkit';
import { Article } from '../../components/interfaces';

export const setDataActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_DATA',
  (payload: Article[]) => {
    return {
      payload,
    };
  },
);

export const setSearchActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_SEARCH',
  (payload: string) => {
    return {
      payload,
    };
  },
);

export const setPageActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_PAGE',
  (payload: string | number) => {
    return {
      payload,
    };
  },
);

export const setLanguageActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_LANGUAGE',
  (payload: string) => {
    return {
      payload,
    };
  },
);

export const setSortedActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_SORTED',
  (payload: string) => {
    return {
      payload,
    };
  },
);

export const setPageSizeActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_PAGE_SIZE',
  (payload: string) => {
    return {
      payload,
    };
  },
);

export const setNoValueInFieldActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_NO_VALUE_IN_FIELD',
  (payload: boolean) => {
    return {
      payload,
    };
  },
);

export const setTotalResultsActionCreator = createAction(
  'DASHBOARD_REDUCER/SET_TOTAL_RESULTS',
  (payload) => {
    return {
      payload,
    };
  },
);
