import { useNotificationStore } from '../lib/store';
// Helper function for notifications
const notifyError = (message) => {
    useNotificationStore.getState().addNotification(message, 'error');
};
// Environment validation
const validateEnvironment = () => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey) {
        notifyError('OpenAI API key is not configured. Please check your environment variables.');
        throw new Error('OpenAI API key is missing.');
    }
    return {
        apiKey,
        environment: import.meta.env.MODE,
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
                'OpenAI-Beta': 'assistants=v1',
            },
        };
    }
    catch (error) {
        console.error('OpenAI configuration error:', error);
        notifyError('AI features are currently unavailable.');
        return null;
    }
})();
// Model configurations
export const OPENAI_MODELS = {
    DEFAULT: 'gpt-4-turbo-preview',
    FAST: 'gpt-3.5-turbo',
    ANALYSIS: 'gpt-4',
};
// Token limits
export const MAX_TOKENS = {
    DEFAULT: 500,
    ANALYSIS: 1000,
    SUMMARY: 250,
};
// Retry configuration
export const RETRY_CONFIG = {
    attempts: 3,
    backoff: {
        min: 1000, // Minimum retry interval in milliseconds
        max: 10000, // Maximum retry interval in milliseconds
        factor: 2, // Exponential backoff factor
    },
};