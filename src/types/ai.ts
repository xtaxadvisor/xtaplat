// ai.ts

// Export interface for individual message objects in the AI system
export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Export interface for responses from the AI
export interface AIResponse {
  text: string;
  confidence: number;
  sources?: string[];
}

// Export interface for analysis results from AI interactions
export interface AIAnalysis {
  sentiment: 'positive' | 'negative' | 'neutral';
  topics: string[];
  entities: string[];
  confidence: number;
}

// Export interface for features available within the AI system
export interface AIFeature {
  id: string;
  name: string;
  description: string;
  prompt: string;
}

// Rename the original AIContext union type to AIContextType for specific use cases
export type AIContextType = 'general' | 'tax' | 'financial' | 'service' | 'visitor';

// Redefine AIContext as an interface to match expected structure in application
export interface AIContext {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  suggestedQuestions: string[];
}

// Export interface for collecting feedback about AI interactions
export interface AIFeedback {
  messageId: string;
  rating: number;
  comment?: string;
  context: string;
}