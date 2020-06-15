import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-ecoleta-nodejs.herokuapp.com' ,
});

export default api;
