import { useNotificationStore } from '../lib/store';
class HttpError extends Error {
    status;
    statusText;
    data;
    constructor(status, statusText, data) {
        super(`${status} ${statusText}`);
        this.status = status;
        this.statusText = statusText;
        this.data = data;
        this.name = 'HttpError';
    }
}
export function createHttpClient(baseURL) {
    const { addNotification } = useNotificationStore.getState();
    async function request(url, config = {}) {
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
        }
        catch (error) {
            if (error instanceof HttpError) {
                const message = error.data.message || 'An error occurred';
                addNotification(message, 'error');
            }
            else {
                addNotification('Network error', 'error');
            }
            throw error;
        }
    }
    return {
        get: (url, config) => request(url, { ...config, method: 'GET' }),
        post: (url, data, config) => request(url, {
            ...config,
            method: 'POST',
            body: JSON.stringify(data),
        }),
        put: (url, data, config) => request(url, {
            ...config,
            method: 'PUT',
            body: JSON.stringify(data),
        }),
        delete: (url, config) => request(url, { ...config, method: 'DELETE' }),
    };
}
