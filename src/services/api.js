import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistackbackendmick.herokuapp.com'
});

export default api;
