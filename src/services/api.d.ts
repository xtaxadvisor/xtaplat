export declare function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T>;
export declare const api: {
    get: <T>(endpoint: string, options?: RequestInit) => Promise<T>;
    post: <T>(endpoint: string, data?: any, options?: RequestInit) => Promise<T>;
    put: <T>(endpoint: string, data?: any, options?: RequestInit) => Promise<T>;
    delete: <T>(endpoint: string, options?: RequestInit) => Promise<T>;
};
