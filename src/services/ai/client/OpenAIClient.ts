import OpenAI from 'openai';
import { OPENAI_CONFIG, RETRY_CONFIG } from '../../../config/openai';
import { useNotificationStore } from '../../../lib/store';

export class OpenAIClient {
  private static instance: OpenAI | null = null;
  private static initializationError: Error | null = null;

  private constructor() {}

  public static getInstance(): OpenAI | null {
    if (OpenAIClient.initializationError) {
      return null;
    }

    if (!OpenAIClient.instance) {
      try {
        if (!OPENAI_CONFIG?.apiKey) {
          throw new Error('OpenAI API key is not configured');
        }

        OpenAIClient.instance = new OpenAI({
          apiKey: OPENAI_CONFIG.apiKey,
          maxRetries: RETRY_CONFIG.attempts,
          timeout: 30000,
          defaultHeaders: OPENAI_CONFIG.defaultHeaders,
          defaultQuery: { 
            'api-version': '2024-02'
          }
        });

        // Validate the client
        OpenAIClient.instance.models.list()
          .catch(error => {
            console.error('OpenAI client validation failed:', error);
            OpenAIClient.initializationError = error as Error;
            OpenAIClient.instance = null;
            useNotificationStore.getState().addNotification(
              'AI service is currently unavailable',
              'error'
            );
          });

      } catch (error) {
        OpenAIClient.initializationError = error as Error;
        console.error('Failed to initialize OpenAI client:', error);
        return null;
      }
    }

    return OpenAIClient.instance;
  }

  public static reset(): void {
    OpenAIClient.instance = null;
    OpenAIClient.initializationError = null;
  }

  public static getInitializationError(): Error | null {
    return OpenAIClient.initializationError;
  }
}

export const openaiClient = OpenAIClient.getInstance();