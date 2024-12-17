import { useState, useEffect } from 'react';
import { aiManager } from '../services/ai/AIManager';
import type { AIMessage } from '../types/ai';

export function useAIMonitoring() {
  const [metrics, setMetrics] = useState(aiManager.getMetrics());
  const [history, setHistory] = useState<AIMessage[]>(aiManager.getHistory());
  const [isDebugEnabled, setIsDebugEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(aiManager.getMetrics());
      setHistory(aiManager.getHistory());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleDebug = () => {
    const newDebugState = !isDebugEnabled;
    aiManager.setDebug(newDebugState);
    setIsDebugEnabled(newDebugState);
  };

  const clearHistory = () => {
    aiManager.clearHistory();
    setHistory([]);
  };

  return {
    metrics,
    history,
    isDebugEnabled,
    toggleDebug,
    clearHistory
  };
}