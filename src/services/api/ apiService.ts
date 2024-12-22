// apiService.ts
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';


import cache from '../utils/axiosCache'; // Adjust the path according to your project structure

// Extend AxiosRequestConfig to include the adapter property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  adapter?: any;
}

// Create an Axios instance configured to use the cache adapter
const axiosInstance: AxiosInstance = axios.create({
  adapter: cache.adapter
} as CustomAxiosRequestConfig);

export default axiosInstance;