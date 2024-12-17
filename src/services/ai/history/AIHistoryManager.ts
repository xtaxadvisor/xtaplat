import type { AIMessage } from '../../../types/ai';

export class AIHistoryManager {
  private history: AIMessage[] = [];
  private readonly MAX_HISTORY = 100;

  addMessages(...messages: AIMessage[]): void {
    this.history.push(...messages);
    
    // Keep history size in check
    if (this.history.length > this.MAX_HISTORY) {
      this.history = this.history.slice(-this.MAX_HISTORY);
    }
  }

  getHistory(): AIMessage[] {
    return [...this.history];
  }

  clearHistory(): void {
    this.history = [];
  }
}