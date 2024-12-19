import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import localforage from 'localforage';

// DTOs for creating and updating clients
export interface CreateClientDTO {
  name: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
}

export interface UpdateClientDTO extends Partial<CreateClientDTO> {
  id: string;
}

export class APIClient {
  private static instance: APIClient;
  private client: AxiosInstance;

  private constructor() {
    // Initialize Axios instance
    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor for adding token and handling cache
    this.client.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
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
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor for caching responses and handling errors
    this.client.interceptors.response.use(
      async (response) => {
        await localforage.setItem(response.config.url || '', response);
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          console.error('Unauthorized access - consider token refresh or logout.');
        }
        return Promise.reject(error);
      }
    );
  }

  // Singleton instance
  public static getInstance(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }

  // Generic HTTP methods
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

// Export singleton instance
export const apiClient = APIClient.getInstance();