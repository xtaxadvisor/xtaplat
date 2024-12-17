```typescript
import React from 'react';
import { Lightbulb } from 'lucide-react';

interface AIContextualHelpProps {
  context: string;
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function AIContextualHelp({ context, suggestions, onSelect }: AIContextualHelpProps) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <div className="flex items-center space-x-2 mb-3">
        <Lightbulb className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium text-blue-900">
          Related Questions
        </span>
      </div>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="w-full text-left p-2 text-sm text-blue-700 hover:bg-blue-100 rounded transition-colors duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
```