export interface ErrorResponse {
  error: string;
  details?: unknown;
}

export function createErrorResponse(
  statusCode: number,
  message: string,
  details?: unknown
) {
  return {
    statusCode,
    body: JSON.stringify({
      error: message,
      ...(typeof details === 'object' && details !== null ? { details } : {})
    })
  };
}

export function createSuccessResponse<T>(data: T) {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}