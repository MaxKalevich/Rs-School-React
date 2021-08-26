import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API_KEY } from '../../api';

import { IParamTypes } from '../interfaces';

import './details.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDataDetailsThunk } from '../../redux/reducers/detailsReducerSlice';

const DetailsPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.detailsReducerSlice.data);
  const isLoading = useSelector((state: any) => state.detailsReducerSlice.isLoading);
  const { title } = useParams<IParamTypes>();

  const encodedUri = encodeURI(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`);

  useEffect(() => {
    dispatch(getDataDetailsThunk({ encodedUri }));
  }, []);

  if (isLoading) {
    return <h1 style={{ textAlign: 'center', marginTop: '25px' }}>Loading...</h1>;
  }
  return (
    <div>
      {data.map((el: any, index: any) => (
        <div className="details-wrapper" key={index}>
          <div className="details-title">{el.title}</div>
          <img
            style={{ width: '500px', border: '2px red solid' }}
            src={el.urlToImage}
            alt="picture"
          />
          <p className="description-details">{el.description}</p>
          <a className="description-author">{el.author}</a>
          <p className="description-content">{el.content}</p>
          <a className="link" href={el.url}>
            {el.url}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
