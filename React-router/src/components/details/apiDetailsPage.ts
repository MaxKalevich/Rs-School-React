import { AxiosResponse } from 'axios';
import axiosInstance, { API_KEY } from '../../api';

const getDataDetails = async (title: string): Promise<any> => {
  const response: AxiosResponse = await axiosInstance.get(
    `v2/everything?qInTitle=${title}&apiKey=${API_KEY}`,
  );

  return response.data === 200 ? console.log(response.data) : false;
};
