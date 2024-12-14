import type { HandlerEvent } from '@netlify/functions';

const ALLOWED_ORIGINS = [
  process.env.VITE_APP_URL || 'http://localhost:3000',
  'https://xtaxadvisors.netlify.app'
];

export const corsHeaders = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400', // 24 hours cache for preflight
};

export function getCorsHeaders(event: HandlerEvent) {
  const origin = event.headers.origin || '';
  
  return {
    ...corsHeaders,
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  };
}

export function handleCors(event: HandlerEvent) {
  const headers = getCorsHeaders(event);
  
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }
  
  return headers;
}