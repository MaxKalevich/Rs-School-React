import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './articles.scss';

import Pagination from '../pagination/pagination';
import ErrorPage from '../errorPage/ErrorPage';
import SearchNotFound from '../searchNotFoundPage/SearchNotFound';

import { IArticleProps } from '../interfaces';

const Articles: React.FC<IArticleProps> = ({ totalResults, articles, pageSize }) => {
  const statusError = useSelector((state: any) => state.mainSlice.statusError);
  const notFound = useSelector((state: any) => state.mainSlice.notFound);
  if (statusError) {
    return <ErrorPage />;
  }
  if (notFound) {
    return <SearchNotFound />;
  }
  return (
    <div className="article-wrapper">
      {articles.map((item, index) => (
        <div key={index}>
          <p>{item.description}</p>
          <p>{item.author}</p>
          <p>{item.source.id}</p>
          <p>{item.source.name}</p>
          <p>{item.title}</p>
          <img className="image-article" src={item.urlToImage} alt="picture" />
          <a className="link" href={item.url}>
            {item.url}
          </a>
          <br />
          <NavLink to={`/details/:${item.title.replace(/%/gi, 'percent')}`}>
            View more
          </NavLink>
        </div>
      ))}
      <Pagination totalResults={totalResults} pageSize={pageSize} />
    </div>
  );
};

export default Articles;
