// apiService.ts
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import cache from '../path/to/axiosCache'; // Adjust the path according to your project structure

// Extend AxiosRequestConfig to include the adapter property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  adapter?: any;
}

// Create an Axios instance configured to use the cache adapter
const axiosInstance = axios.create({
  adapter: cache.adapter
});

export default axiosInstance;