```typescript
import { setupCache, buildMemoryStorage } from 'axios-cache-adapter';

export const cache = setupCache({
  maxAge: 15 * 60 * 1000, // Cache for 15 minutes
  storage: buildMemoryStorage(),
  exclude: {
    query: false,
    methods: ['post', 'put', 'delete']
  },
  key: req => {
    const serialized = req.params ? `${req.url}?${JSON.stringify(req.params)}` : req.url;
    return `${req.method}:${serialized}`;
  },
  invalidate: async (config) => {
    // Invalidate cache on mutations
    const invalidatePatterns = config.invalidateCache as string[];
    if (invalidatePatterns) {
      await Promise.all(
        invalidatePatterns.map(pattern => cache.storage.removeItem(pattern))
      );
    }
  }
});
```