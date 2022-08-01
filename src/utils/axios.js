import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.REACT_APP_ONEL_BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: process.env.REACT_APP_ONEL_BEARER_TOKEN,
  },
  timeout: 10000,
});
