import React from 'react';

import { useDispatch } from 'react-redux';

import { IPagination } from '../interfaces';

import { setPageActionCreator } from '../../redux/actionCreators/actionCreatorsDashboardReducer';

const Pagination: React.FC<IPagination> = ({ totalResults, pageSize }): JSX.Element => {
  const numberOfPagesFunc = () => totalResults / +pageSize;

  const dispatch = useDispatch();

  const numberOfPages = Math.ceil(+numberOfPagesFunc());

  const pages: Array<number> = [];

  for (let i = 1; i < numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '20px',
          backgroundColor: 'dimgray',
          borderRadius: '10px',
        }}
      >
        {pages.map((p) => (
          <span
            style={{
              cursor: 'pointer',
              marginLeft: '3px',
            }}
            onClick={() => dispatch(setPageActionCreator(p))}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
