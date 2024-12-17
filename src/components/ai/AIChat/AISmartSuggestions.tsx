```typescript
import React from 'react';
import { Calculator, Calendar, FileText, HelpCircle } from 'lucide-react';
import { AIFeatureCard } from './AIFeatureCard';

interface AISmartSuggestionsProps {
  onSelect: (prompt: string) => void;
}

export function AISmartSuggestions({ onSelect }: AISmartSuggestionsProps) {
  const suggestions = [
    {
      icon: Calculator,
      title: 'Tax Calculator',
      description: 'Get an estimate of your tax obligations',
      prompt: 'Can you help me calculate my estimated taxes?'
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a meeting with our experts',
      prompt: 'I would like to schedule a consultation'
    },
    {
      icon: FileText,
      title: 'Document Review',
      description: 'Get help with document requirements',
      prompt: 'What documents do I need for tax filing?'
    },
    {
      icon: HelpCircle,
      title: 'General Assistance',
      description: 'Ask any other questions',
      prompt: 'What services do you offer?'
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-700 px-4">
        How can I help you today?
      </h3>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <AIFeatureCard
            key={index}
            {...suggestion}
            onClick={() => onSelect(suggestion.prompt)}
          />
        ))}
      </div>
    </div>
  );
}
```