```typescript
import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../../ui/Button';

interface AIFeedbackProps {
  onFeedback: (isPositive: boolean) => void;
  disabled?: boolean;
}

export function AIFeedback({ onFeedback, disabled }: AIFeedbackProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFeedback(true)}
        disabled={disabled}
        className="text-gray-500 hover:text-green-600"
      >
        <ThumbsUp className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onFeedback(false)}
        disabled={disabled}
        className="text-gray-500 hover:text-red-600"
      >
        <ThumbsDown className="h-4 w-4" />
      </Button>
    </div>
  );
}
```