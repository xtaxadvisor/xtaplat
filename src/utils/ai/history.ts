```typescript
import type { AIMessage } from '../../types/ai';
import { aiStorage } from './storage';

const HISTORY_KEY = 'ai_chat_history';
const MAX_HISTORY_LENGTH = 100;

export function saveMessageToHistory(message: AIMessage): void {
  const history = getMessageHistory();
  history.push({
    ...message,
    timestamp: new Date().toISOString()
  });

  // Keep only the last MAX_HISTORY_LENGTH messages
  if (history.length > MAX_HISTORY_LENGTH) {
    history.shift();
  }

  aiStorage.set(HISTORY_KEY, history);
}

export function getMessageHistory(): AIMessage[] {
  return aiStorage.get<AIMessage[]>(HISTORY_KEY) || [];
}

export function clearMessageHistory(): void {
  aiStorage.delete(HISTORY_KEY);
}

export function getRecentTopics(): string[] {
  const history = getMessageHistory();
  const topics = new Set<string>();

  history.forEach(message => {
    if (message.role === 'user') {
      const words = message.content.toLowerCase().split(' ');
      words.forEach(word => {
        if (word.length > 3) {
          topics.add(word);
        }
      });
    }
  });

  return Array.from(topics).slice(-5);
}
```