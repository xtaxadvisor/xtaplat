```typescript
import type { AIContext } from '../../types/ai';

export const AI_CONTEXTS: Record<string, AIContext> = {
  tax: {
    id: 'tax',
    name: 'Tax Assistance',
    description: 'Get help with tax-related questions',
    systemPrompt: `You are a knowledgeable tax assistant. Focus on:
- Explaining tax concepts in simple terms
- Providing general tax guidance
- Helping with tax planning
- Clarifying tax documentation requirements
Note: Always mention that this is general information and specific tax advice requires consultation.`,
    suggestedQuestions: [
      'What tax deductions am I eligible for?',
      'How do I prepare for tax season?',
      'What documents do I need for filing taxes?',
      'How does self-employment tax work?'
    ]
  },
  financial: {
    id: 'financial',
    name: 'Financial Planning',
    description: 'Get help with financial planning',
    systemPrompt: `You are a financial planning assistant. Focus on:
- Basic financial planning concepts
- Investment fundamentals
- Retirement planning basics
- Budgeting and saving strategies
Note: Always clarify that specific financial advice requires professional consultation.`,
    suggestedQuestions: [
      'How should I start planning for retirement?',
      'What are the basics of investment?',
      'How can I create a budget?',
      'What are the best ways to save money?'
    ]
  },
  service: {
    id: 'service',
    name: 'Service Information',
    description: 'Learn about our services',
    systemPrompt: `You are a service information assistant. Focus on:
- Explaining available services
- Providing pricing information
- Describing service processes
- Helping with scheduling
Note: Be clear about service scope and limitations.`,
    suggestedQuestions: [
      'What services do you offer?',
      'How much do your services cost?',
      'How can I schedule a consultation?',
      'What is your process for new clients?'
    ]
  }
};

export function getContextFromPath(path: string): string {
  if (path.includes('/tax')) return 'tax';
  if (path.includes('/financial')) return 'financial';
  if (path.includes('/services')) return 'service';
  return 'general';
}
```