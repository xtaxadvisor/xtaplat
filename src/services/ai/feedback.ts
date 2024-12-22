```typescript
import type { AIFeedback } from '../../types/ai';

export async function processFeedback(feedback: AIFeedback): Promise<void> {
  // Store feedback for analysis
  await storeFeedback(feedback);
  
  // Update response quality metrics
  await updateMetrics(feedback);
  
  // Trigger learning pipeline if needed
  if (feedback.rating < 3) {
    await triggerLearning(feedback);
  }
}

async function storeFeedback(feedback: AIFeedback): Promise<void> {
  // Implementation for storing feedback
}

async function updateMetrics(feedback: AIFeedback): Promise<void> {
  // Implementation for updating metrics
}

async function triggerLearning(feedback: AIFeedback): Promise<void> {
  // Implementation for triggering learning pipeline
}
```