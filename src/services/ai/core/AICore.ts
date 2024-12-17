import { openaiClient } from '../client/OpenAIClient';
import { OPENAI_MODELS, MAX_TOKENS } from '../../../config/openai';
import type { AIMessage } from '../../../types/ai';

class AICore {
  private static instance: AICore;

  private constructor() {}

  public static getInstance(): AICore {
    if (!AICore.instance) {
      AICore.instance = new AICore();
    }
    return AICore.instance;
  }

  async getCompletion(messages: AIMessage[]): Promise<string> {
    if (!openaiClient) {
      throw new Error('AI service is not available');
    }

    try {
      const completion = await openaiClient.chat.completions.create({
        model: OPENAI_MODELS.DEFAULT,
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        max_tokens: MAX_TOKENS.DEFAULT,
        temperature: 0.7,
        presence_penalty: 0.6,
        frequency_penalty: 0.5
      });

      return completion.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('AI completion error:', error);
      throw new Error('Failed to get AI response. Please try again later.');
    }
  }

  async validateAPIKey(): Promise<boolean> {
    if (!openaiClient) return false;

    try {
      await openaiClient.models.list();
      return true;
    } catch (error) {
      console.error('API key validation failed:', error);
      return false;
    }
  }
}

export const aiCore = AICore.getInstance();