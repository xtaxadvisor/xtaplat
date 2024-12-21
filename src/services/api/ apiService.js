// apiService.ts
import axios from 'axios';
import cache from '../utils/axiosCache'; // Adjust the path according to your project structure
// Create an Axios instance configured to use the cache adapter
const axiosInstance = axios.create({
    adapter: cache.adapter
});
export default axiosInstance;
