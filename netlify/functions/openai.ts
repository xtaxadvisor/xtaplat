import { Handler } from '@netlify/functions';
import { Configuration, OpenAIApi } from 'openai';
import { handleCors, getCorsHeaders } from './utils/cors';
import { createErrorResponse, createSuccessResponse } from './utils/response';

// Initialize OpenAI client based on environment
const getOpenAIConfig = () => {
  const environment = process.env.CONTEXT || process.env.NODE_ENV || 'development';
  let apiKey;

  switch (environment) {
    case 'production':
      apiKey = process.env.OPENAI_API_KEY_PROD;
      break;
    case 'deploy-preview':
      apiKey = process.env.OPENAI_API_KEY_PREVIEWS;
      break;
    case 'branch-deploy':
      apiKey = process.env.OPENAI_API_KEY_BRANCH;
      break;
    default:
      apiKey = process.env.OPENAI_API_KEY_LOCAL;
  }

  if (!apiKey) {
    throw new Error(`OpenAI API key not configured for environment: ${environment}`);
  }

  return new Configuration({ apiKey });
};

// Create OpenAI client
let openai: OpenAIApi;
try {
  const config = getOpenAIConfig();
  openai = new OpenAIApi(config);
} catch (error) {
  console.error('Failed to initialize OpenAI client:', error);
}

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

    // Parse request body
    const { content, context = 'visitor' } = JSON.parse(event.body || '{}');
    if (!content) {
      return {
        ...createErrorResponse(400, 'Content is required'),
        headers: corsHeaders
      };
    }

    // Call OpenAI API
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: `Context: ${context}` },
        { role: "user", content }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const response = completion.data.choices[0]?.message?.content || '';

    // Return success response
    return {
      ...createSuccessResponse({ response }),
      headers: corsHeaders
    };

  } catch (error) {
    console.error('OpenAI error:', error);
    return {
      ...createErrorResponse(
        500,
        'Error processing request',
        process.env.NODE_ENV === 'development' ? error : undefined
      ),
      headers: getCorsHeaders(event)
    };
  }
};