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
            return config;
        }, (error) => Promise.reject(error));
        // Response interceptor for caching responses and handling errors
        this.client.interceptors.response.use(async (response) => {
            await localforage.setItem(response.config.url || '', response);
            return response;
        }, (error) => {
            if (error.response?.status === 401) {
                console.error('Unauthorized access - consider token refresh or logout.');
            }
            return Promise.reject(error);
        });
    }
    // Singleton instance
    static getInstance() {
        if (!APIClient.instance) {
            APIClient.instance = new APIClient();
        }
        return APIClient.instance;
    }
    // Generic HTTP methods
    async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
}
// Export singleton instance
export const apiClient = APIClient.getInstance();
