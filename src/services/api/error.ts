```typescript
export class APIError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
  }

  static fromResponse(error: any): APIError {
    const status = error.response?.status || 500;
    const code = error.response?.data?.code || 'UNKNOWN_ERROR';
    const message = error.response?.data?.message || 'An unexpected error occurred';
    const data = error.response?.data;

    return new APIError(status, code, message, data);
  }
}

export function isAPIError(error: any): error is APIError {
  return error instanceof APIError;
}
```