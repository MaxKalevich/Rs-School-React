import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { Article, GetArticles } from '../../types';
import axiosInstance, { API_KEY } from '../../api';
import './details.scss';

interface ParamTypes {
  title: string;
}

const DetailsPage: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { title } = useParams<ParamTypes>();

  const encodedUri = encodeURI(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`);

  const getDataDetails = async () => {
    setIsLoading(true);
    const response: AxiosResponse<GetArticles> = await axiosInstance.get(encodedUri);
    return response.data;
  };

  useEffect(() => {
    getDataDetails().then((response) => {
      setData(response.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 style={{ textAlign: 'center', marginTop: '25px' }}>Loading...</h1>;
  }
  return (
    <div>
      {data.map((el, index) => (
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
        </div>
      ))}
    </div>
  );
};

export default DetailsPage;
