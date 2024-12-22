import { setupCache } from 'axios-cache-adapter';
import * as memoryStorage from 'axios-cache-adapter/src/memory';

export const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 minutes
  store: memoryStorage(), // Memory storage
  key: (req: any) => {
    const serialized = req.params
      ? `${req.url}?${JSON.stringify(req.params)}`
      : req.url;
    return `${req.method}:${serialized}`;
  },
});

export default cache;