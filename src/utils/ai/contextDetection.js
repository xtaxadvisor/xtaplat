"use strict";
`` `typescript
import type { AIContext } from '../../types/ai';

export function detectContext(input: string): AIContext {
  const taxKeywords = ['tax', 'deduction', 'filing', 'irs', 'return'];
  const financialKeywords = ['invest', 'budget', 'savings', 'retirement', 'portfolio'];
  const serviceKeywords = ['service', 'consultation', 'appointment', 'schedule', 'meeting'];

  const lowercaseInput = input.toLowerCase();

  if (taxKeywords.some(keyword => lowercaseInput.includes(keyword))) {
    return 'tax';
  }
  if (financialKeywords.some(keyword => lowercaseInput.includes(keyword))) {
    return 'financial';
  }
  if (serviceKeywords.some(keyword => lowercaseInput.includes(keyword))) {
    return 'service';
  }

  return 'general';
}

export function getContextualSuggestions(context: AIContext): string[] {
  const suggestions: Record<AIContext, string[]> = {
    tax: [
      'What tax deductions can I claim?',
      'When is the tax filing deadline?',
      'Do I need to file quarterly taxes?'
    ],
    financial: [
      'How should I start investing?',
      'What retirement accounts do you recommend?',
      'How can I improve my financial planning?'
    ],
    service: [
      'What services do you offer?',
      'How can I schedule a consultation?',
      'What are your fees?'
    ],
    general: [
      'Tell me more about your company',
      'How can you help me?',
      'What are your business hours?'
    ]
  };

  return suggestions[context] || suggestions.general;
}
` ``;
