interface RequestConfig extends RequestInit {
    params?: Record<string, string>;
}
interface HttpClient {
    get: <T>(url: string, config?: RequestConfig) => Promise<T>;
    post: <T>(url: string, data?: any, config?: RequestConfig) => Promise<T>;
    put: <T>(url: string, data?: any, config?: RequestConfig) => Promise<T>;
    delete: <T>(url: string, config?: RequestConfig) => Promise<T>;
}
export declare function createHttpClient(baseURL: string): HttpClient;
export {};
