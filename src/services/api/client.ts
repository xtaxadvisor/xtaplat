<<<<<<< HEAD
import { api } from '../api';
import type { Client } from '../../types';

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

export const clientService = {
  getAll: () => 
    api.get<Client[]>('/clients'),

  getById: (id: string) => 
    api.get<Client>(`/clients/${id}`),

  create: (data: CreateClientDTO) => 
    api.post<Client>('/clients', data),

  update: ({ id, ...data }: UpdateClientDTO) => 
    api.put<Client>(`/clients/${id}`, data),

  delete: (id: string) => 
    api.delete<void>(`/clients/${id}`),

  search: (query: string) => 
    api.get<Client[]>('/clients/search', { params: { query } }),
};
=======
```typescript
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { retryAdapterEnhancer } from 'axios-extensions';

export class APIClient {
  private static instance: APIClient;
  private client: AxiosInstance;
  
  private constructor() {
    const cache = setupCache({
      maxAge: 15 * 60 * 1000, // Cache for 15 minutes
      exclude: { query: false }
    });

    this.client = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      timeout: 10000,
      adapter: retryAdapterEnhancer(cache.adapter, { 
        retries: 3,
        retryDelay: retryCount => retryCount * 1000
      })
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle token refresh or logout
        }
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }

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

export const apiClient = APIClient.getInstance();
```
>>>>>>> b597b98 (Update project files and sync with GitHub)
