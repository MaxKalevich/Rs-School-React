import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export const API_KEY = '10851345034f47e3aa14449641d343ee';

export default axiosInstance;
