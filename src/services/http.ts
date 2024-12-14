import { useNotificationStore } from '../lib/store';

interface RequestConfig extends RequestInit {
  params?: Record<string, string>;
}

interface HttpClient {
  get: <T>(url: string, config?: RequestConfig) => Promise<T>;
  post: <T>(url: string, data?: any, config?: RequestConfig) => Promise<T>;
  put: <T>(url: string, data?: any, config?: RequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: RequestConfig) => Promise<T>;
}

class HttpError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public data: any
  ) {
    super(`${status} ${statusText}`);
    this.name = 'HttpError';
  }
}

export function createHttpClient(baseURL: string): HttpClient {
  const { addNotification } = useNotificationStore.getState();

  async function request<T>(
    url: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const { params, ...init } = config;
    const token = localStorage.getItem('token');

    const headers = new Headers({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...init.headers,
    });

    const fullUrl = new URL(`${baseURL}${url}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        fullUrl.searchParams.append(key, value);
      });
    }

    try {
      const response = await fetch(fullUrl.toString(), {
        ...init,
        headers,
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new HttpError(response.status, response.statusText, error);
      }

      return response.json();
    } catch (error) {
      if (error instanceof HttpError) {
        const message = error.data.message || 'An error occurred';
        addNotification(message, 'error');
      } else {
        addNotification('Network error', 'error');
      }
      throw error;
    }
  }

  return {
    get: <T>(url: string, config?: RequestConfig) =>
      request<T>(url, { ...config, method: 'GET' }),

    post: <T>(url: string, data?: any, config?: RequestConfig) =>
      request<T>(url, {
        ...config,
        method: 'POST',
        body: JSON.stringify(data),
      }),

    put: <T>(url: string, data?: any, config?: RequestConfig) =>
      request<T>(url, {
        ...config,
        method: 'PUT',
        body: JSON.stringify(data),
      }),

    delete: <T>(url: string, config?: RequestConfig) =>
      request<T>(url, { ...config, method: 'DELETE' }),
  };
}