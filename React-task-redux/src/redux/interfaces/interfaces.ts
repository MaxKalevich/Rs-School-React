import {
  IS_LOADING,
  ERROR,
  NOT_FOUND,
} from '../actions/actionsMainReducer/actionsMainReducer';
import { Article } from '../../components/interfaces';
import { TSortType } from '../../components/types';

export interface IMainState {
  loading: boolean;
  statusError: boolean;
  notFound: boolean;
}

export type TActionMainReducer = {
  type: typeof IS_LOADING | typeof ERROR | typeof NOT_FOUND,
  payload: any,
};

export interface IDashboardState {
  searchData: Article[];
  search: string;
  page: number | string;
  language: string;
  sorted: TSortType;
  pageSize: number;
  noValueInField: boolean;
  totalResults: number;
}

export type TFetchArticles = {
  search: string,
  sorted: string,
  pageSize: string | number,
  page: string | number,
  language: string,
};
