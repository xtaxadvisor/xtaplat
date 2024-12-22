import { aiCore } from './core/AICore';
import { AIMetricsManager } from './metrics/AIMetricsManager';
import { AIHistoryManager } from './history/AIHistoryManager';
import { AICacheManager } from './cache/AICacheManager';
import { formatResponse } from '../../utils/ai/responseFormatting';
import type { AIMessage, AIAnalysis } from '../../types/ai';

interface AIManagerConfig {
  debug?: boolean;
}

class AIManager {
  private static instance: AIManager;
  private debug: boolean;
  private metrics: AIMetricsManager;
  private history: AIHistoryManager;
  private cache: AICacheManager;

  private constructor(config: AIManagerConfig = {}) {
    this.debug = config.debug || false;
    this.metrics = new AIMetricsManager();
    this.history = new AIHistoryManager();
    this.cache = new AICacheManager();
  }

  static getInstance(config?: AIManagerConfig): AIManager {
    if (!AIManager.instance) {
      AIManager.instance = new AIManager(config);
    }
    return AIManager.instance;
  }

  async processMessage(
    content: string, 
    context: string = 'general'
  ): Promise<{ response: string; analysis?: AIAnalysis }> {
    const startTime = Date.now();
    this.metrics.incrementRequests();

    try {
      if (this.debug) {
        console.log('[AI Manager] Processing message:', { content, context });
      }

      // Check cache
      const cacheKey = `${context}:${content}`;
      const cachedResponse = this.cache.get(cacheKey);
      if (cachedResponse) {
        return { response: cachedResponse };
      }

      // Get AI response
      const messages: AIMessage[] = [
        { role: 'system', content: `Context: ${context}` },
        { role: 'user', content }
      ];
      
      const response = await aiCore.getCompletion(messages);
      const formattedResponse = formatResponse(response, context);
      
      // Update cache and history
      this.cache.set(cacheKey, formattedResponse);
      this.history.addMessages(
        { role: 'user', content },
        { role: 'assistant', content: formattedResponse }
      );
      
      // Update metrics
      const duration = Date.now() - startTime;
      this.metrics.updateMetrics(duration, true);

      if (this.debug) {
        console.log('[AI Manager] Response:', formattedResponse);
      }

      return { response: formattedResponse };

    } catch (error) {
      this.metrics.updateMetrics(Date.now() - startTime, false);
      console.error('[AI Manager] Error:', error);
      throw error;
    }
  }

  getMetrics() {
    return this.metrics.getMetrics();
  }

  getHistory() {
    return this.history.getHistory();
  }

  clearHistory() {
    this.history.clearHistory();
  }

  setDebug(enabled: boolean) {
    this.debug = enabled;
  }
}

export const aiManager = AIManager.getInstance();