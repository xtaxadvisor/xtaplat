import OpenAI from 'openai';
import { OPENAI_CONFIG } from '../../config/openai';
// Singleton pattern for OpenAI client
class OpenAIClient {
    static instance;
    constructor() { }
    static getInstance() {
        if (!OpenAIClient.instance) {
            if (!OPENAI_CONFIG.apiKey) {
                throw new Error('OpenAI API key is not configured');
            }
            OpenAIClient.instance = new OpenAI(OPENAI_CONFIG);
        }
        return OpenAIClient.instance;
    }
}
export const openaiClient = OpenAIClient.getInstance();
