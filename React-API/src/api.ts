import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
});

export const API_KEY = '68cd6cc8cf104ae69e9b5ba94097c977';

export default axiosInstance;
