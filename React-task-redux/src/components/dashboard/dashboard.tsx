import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './dashboard.scss';

import { SortType } from '../types';

import Articles from '../articles/articles';

import {
  setLanguageActionCreator,
  setNoValueInFieldActionCreator,
  setPageSizeActionCreator,
  setSearchActionCreator,
  setSortedActionCreator,
  fetchArticles,
} from '../../redux/reducers/dashboardReducerSlice';
import { setLoading } from '../../redux/reducers/mainReducerSlice';

const Dashboard: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const searchData = useSelector((state: any) => state.dashboardSlice.searchData);
  const search = useSelector((state: any) => state.dashboardSlice.search);
  const page = useSelector((state: any) => state.dashboardSlice.page);
  const language = useSelector((state: any) => state.dashboardSlice.language);
  const sorted = useSelector((state: any) => state.dashboardSlice.sorted);
  const pageSize = useSelector((state: any) => state.dashboardSlice.pageSize);
  const noValueInField = useSelector((state: any) => state.dashboardSlice.noValueInField);
  const totalResults = useSelector((state: any) => state.dashboardSlice.totalResults);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text: string = e.target.value;
    if (text.trim().length === 0) {
      dispatch(setNoValueInFieldActionCreator(true));
    } else {
      dispatch(setNoValueInFieldActionCreator(false));
      dispatch(setSearchActionCreator(text));
    }
    dispatch(setSearchActionCreator(text));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (noValueInField) {
      return false;
    } else {
      dispatch(setNoValueInFieldActionCreator(false));
      dispatch(fetchArticles({ search, sorted, pageSize, page, language }));
      dispatch(setLoading());
    }
  };
  return (
    <div className="fill">
      <form className="form" onSubmit={handleSubmit}>
        <label className="search" htmlFor="search">
          <h1 className="header-search">Search</h1>
          <input
            className="input-search"
            type="search"
            id="search"
            placeholder="Введите поисковый запрос"
            value={search}
            onChange={handleChange}
          />
        </label>
        <div className="radio">
          <label className="label-radio">
            POPULARITY
            <input
              type="radio"
              value={SortType.POPULARITY}
              name="radio"
              checked={sorted === SortType.POPULARITY}
              onChange={() => dispatch(setSortedActionCreator(SortType.POPULARITY))}
            />
          </label>
          <label className="label-radio">
            RELEVANCY
            <input
              type="radio"
              value={SortType.RELEVANCY}
              name="radio"
              checked={sorted === SortType.RELEVANCY}
              onChange={() => dispatch(setSortedActionCreator(SortType.RELEVANCY))}
            />
          </label>
          <label className="label-radio">
            PUBLISHED_AT
            <input
              type="radio"
              value={SortType.PUBLISHED_AT}
              name="radio"
              checked={sorted === SortType.PUBLISHED_AT}
              onChange={() => dispatch(setSortedActionCreator(SortType.PUBLISHED_AT))}
            />
          </label>
        </div>
        <div style={{ margin: '0 auto', color: 'whitesmoke' }}>
          Select language:
          <select
            value={language}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
              dispatch(setLanguageActionCreator(value));
            }}
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="de">De</option>
            <option value="pt">Pt</option>
          </select>
        </div>
        <div style={{ margin: '0 auto', color: 'whitesmoke' }}>
          Page size:
          <select
            value={pageSize}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
              dispatch(setPageSizeActionCreator(value));
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </form>
      <Articles
        totalResults={totalResults}
        articles={searchData}
        page={page}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Dashboard;
