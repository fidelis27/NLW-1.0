import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_BASE_URL,
});

export default api;
