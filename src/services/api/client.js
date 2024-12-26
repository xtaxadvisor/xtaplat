import axios from 'axios';
import localforage from 'localforage';
export class APIClient {
    static instance;
    client;
    constructor() {
        // Initialize Axios instance
        this.client = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            timeout: 10000,
        });
        this.setupInterceptors();
    }
    setupInterceptors() {
        // Request interceptor for adding token and handling cache
        this.client.interceptors.request.use(async (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                };
            }
            // Check for cached response
            const cachedResponse = await localforage.getItem(config.url || '');
            if (cachedResponse) {
                console.log('Returning cached response:', cachedResponse);
                return Promise.reject({ response: cachedResponse });
            }
            search: (query) => api.get(`/clients/search?query=${encodeURIComponent(query)}`),
            ;
        });
    }
}
