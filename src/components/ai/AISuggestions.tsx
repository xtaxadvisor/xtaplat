import React from 'react';
import { Button } from '../ui/Button';

interface AISuggestionsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function AISuggestions({ suggestions, onSelect }: AISuggestionsProps) {
  return (
    <div className="p-3 space-y-2">
      <p className="text-xs text-gray-500 font-medium">Suggested questions:</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-sm bg-gray-50 hover:bg-gray-100"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
}