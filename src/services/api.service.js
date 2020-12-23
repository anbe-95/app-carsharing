import axios from 'axios';

export class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: '/api',
      headers: {
        'X-Api-Factory-Application-Id': process.env.VUE_APP_APP_ID,
      },
    });

    this.api.interceptors.response.use((response) => response.data);
    this.api.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
  }
}

export default new ApiService();
