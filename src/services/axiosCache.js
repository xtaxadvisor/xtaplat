// axiosCache.ts
import { setupCache, memoryStorage } from 'axios-cache-adapter';
// Configure cache with a custom memory storage
export const cache = setupCache({
    maxAge: 15 * 60 * 1000, // Cache responses for 15 minutes
    store: memoryStorage(), // Use custom memory storage for caching
    key: (req) => {
        // Generate a unique key for each request based on URL and parameters
        const serializedParams = req.params ? `${JSON.stringify(req.params)}` : '';
        return `${req.method}:${req.url}?${serializedParams}`;
    },
});
export default cache;
