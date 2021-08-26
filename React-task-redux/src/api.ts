import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export const API_KEY = '2a1b9036d2074dfda78d231ccf6ea846';

export default axiosInstance;
