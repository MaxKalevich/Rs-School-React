import React from 'react';
import { NavLink } from 'react-router-dom';
import { Article } from '../../types';
import './articles.scss';
import Pagination from '../pagination/pagination';

interface ArticleProps {
  totalResults: number;
  articles: Article[];
  setIsLoading: any;
  page: number | string;
  onChangePage: (pageFromInput: number) => void;
  pageSize: number;
  setPage: any;
}

const Articles: React.FC<ArticleProps> = ({
  totalResults,
  articles,
  pageSize,
  setPage,
}) => (
  <div className="article-wrapper">
    {articles.map((item, index) => (
      <div key={index}>
        <p>{item.description}</p>
        <p>{item.author}</p>
        <p>{item.source.id}</p>
        <p>{item.source.name}</p>
        <p>{item.title}</p>
        <img
          style={{
            width: '470px',
            display: 'block',
            borderRadius: '22px',
            margin: '25px',
          }}
          src={item.urlToImage}
          alt="picture"
        />
        <a className="link" href={item.url}>
          {item.url}
        </a>
        <br />
        <NavLink to={`/details/:${item.title}`}>View more</NavLink>
      </div>
    ))}
    <Pagination totalResults={totalResults} pageSize={pageSize} setPage={setPage} />
  </div>
);

export default Articles;
