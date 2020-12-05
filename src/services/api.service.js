import axios from 'axios';

export default axios.create({
  baseURL: 'http://api-factory.simbirsoft1.com/api/',
  timeout: 5000,
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: '4cbcea96de',
  },
});
