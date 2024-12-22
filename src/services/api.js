const API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions';
export async function fetchApi(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });
    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
}
export const api = {
    get: (endpoint, options) => fetchApi(endpoint, { ...options, method: 'GET' }),
    post: (endpoint, data, options) => fetchApi(endpoint, {
        ...options,
        method: 'POST',
        body: JSON.stringify(data),
    }),
    put: (endpoint, data, options) => fetchApi(endpoint, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(data),
    }),
    delete: (endpoint, options) => fetchApi(endpoint, { ...options, method: 'DELETE' }),
};
