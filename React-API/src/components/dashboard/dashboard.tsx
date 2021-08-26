import React, { ChangeEvent, useState } from 'react';
import './dashboard.scss';
import { AxiosResponse } from 'axios';
import axiosInstance, { API_KEY } from '../../api';
import { Article, GetArticles, SortType, TSortType } from '../../types';
import Articles from '../articles/articles';

type TDashboardProps = {
  setIsLoading: any,
};

const Dashboard: React.FC<TDashboardProps> = ({ setIsLoading }): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const [searchData, setSearchData] = useState<Article[]>([]);

  const [sorted, setSorted] = useState<TSortType>(SortType.PUBLISHED_AT);

  const [page, setPage] = useState<number | string>('1');

  const [language, setLanguage] = useState('en');

  const [pageSize, setPageSize] = useState<number>(10);

  const [totalResults, setTotalResults] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text: string = e.target.value;
    setSearch(text);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GetArticles> = await axiosInstance.get(
        `v2/everything?q=${search}&sortBy=${sorted}&pageSize=${pageSize}
        &page=${page}&language=${language}&apiKey=${API_KEY}`,
      );
      setSearchData(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
              onChange={() => setSorted(SortType.POPULARITY)}
            />
          </label>
          <label className="label-radio">
            RELEVANCY
            <input
              type="radio"
              value={SortType.RELEVANCY}
              name="radio"
              checked={sorted === SortType.RELEVANCY}
              onChange={() => setSorted(SortType.RELEVANCY)}
            />
          </label>
          <label className="label-radio">
            PUBLISHED_AT
            <input
              type="radio"
              value={SortType.PUBLISHED_AT}
              name="radio"
              checked={sorted === SortType.PUBLISHED_AT}
              onChange={() => setSorted(SortType.PUBLISHED_AT)}
            />
          </label>
        </div>
        <div style={{ margin: '0 auto', color: 'whitesmoke' }}>
          Select language:
          <select
            value={language}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
              setLanguage(value);
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
              setPageSize(+value);
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
        setIsLoading={setIsLoading}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        onChangePage={(pageFromInput: number | string) => setPage(+pageFromInput)}
      />
    </>
  );
};

export default Dashboard;
