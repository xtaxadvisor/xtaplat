import { setupCache } from 'axios-cache-adapter';
import axios from 'axios';
const cache = setupCache({
    maxAge: 15 * 60 * 1000, // Cache for 15 minutes
    debug: true, // Enable debug logs
});
const axiosInstance = axios.create({
    baseURL: 'https://www.protaxadvisors.tax',
    timeout: 10000, // Set timeout in milliseconds
    adapter: cache.adapter, // Add the cache adapter
});
export default axiosInstance;
