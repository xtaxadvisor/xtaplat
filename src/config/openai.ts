import { useNotificationStore } from '../lib/store';

// Environment validation
const validateEnvironment = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key is not configured. Please check your environment variables.');
  }

  return {
    apiKey,
    environment: import.meta.env.MODE
  };
};

// Configuration object
export const OPENAI_CONFIG = (() => {
  try {
    const { apiKey, environment } = validateEnvironment();
    
    return {
      apiKey,
      dangerouslyAllowBrowser: environment === 'development',
      defaultHeaders: {
        'OpenAI-Beta': 'assistants=v1'
      }
    };
  } catch (error) {
    console.error('OpenAI configuration error:', error);
    useNotificationStore.getState().addNotification(
      'AI features are currently unavailable',
      'error'
    );
    
    return null;
  }
})();

// Model configurations
export const OPENAI_MODELS = {
  DEFAULT: 'gpt-4-turbo-preview',
  FAST: 'gpt-3.5-turbo',
  ANALYSIS: 'gpt-4'
} as const;

// Token limits
export const MAX_TOKENS = {
  DEFAULT: 500,
  ANALYSIS: 1000,
  SUMMARY: 250
} as const;

// Retry configuration
export const RETRY_CONFIG = {
  attempts: 3,
  backoff: {
    min: 1000,
    max: 10000,
    factor: 2
  }
};