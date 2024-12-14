import { Handler } from '@netlify/functions';
import { handleCors, getCorsHeaders } from './utils/cors';
import { validateCredentials, generateToken, createAdminUser } from './utils/auth';
import { createErrorResponse, createSuccessResponse } from './utils/response';

export const handler: Handler = async (event) => {
  try {
    // Handle CORS
    const corsHeaders = handleCors(event);
    if ('statusCode' in corsHeaders) {
      return corsHeaders;
    }

    // Validate request method
    if (event.httpMethod !== 'POST') {
      return {
        ...createErrorResponse(405, 'Method not allowed'),
        headers: corsHeaders
      };
    }

    // Parse and validate request body
    let username: string, password: string;
    try {
      const body = JSON.parse(event.body || '{}');
      username = body.username;
      password = body.password;

      if (!username || !password) {
        throw new Error('Missing credentials');
      }
    } catch (error) {
      return {
        ...createErrorResponse(400, 'Invalid request body'),
        headers: corsHeaders
      };
    }

    // Validate credentials
    const isValid = await validateCredentials(username, password);
    if (!isValid) {
      return {
        ...createErrorResponse(401, 'Invalid credentials'),
        headers: corsHeaders
      };
    }

    // Create admin user and generate token
    const user = createAdminUser();
    const token = await generateToken(user);

    // Return success response
    return {
      ...createSuccessResponse({ token, user }),
      headers: corsHeaders
    };

  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV !== 'production') {
      console.error('Admin auth error:', error);
    }

    return {
      ...createErrorResponse(
        500,
        'Internal server error',
        process.env.NODE_ENV === 'development' ? error : undefined
      ),
      headers: getCorsHeaders(event)
    };
  }
};