import React from 'react';
import { Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../../ui/Button';

interface AIResponseActionsProps {
  onCopy: () => void;
  onFeedback: (isPositive: boolean) => void;
}

export function AIResponseActions({ onCopy, onFeedback }: AIResponseActionsProps) {
  return (
    <div className="flex items-center space-x-2 mt-2">
      <Button
        variant="ghost"
        size="sm"
        icon={Copy}
        onClick={onCopy}
        className="text-gray-500 hover:text-gray-700"
      >
        Copy
      </Button>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="sm"
          icon={ThumbsUp}
          onClick={() => onFeedback(true)}
          className="text-gray-500 hover:text-green-600"
        />
        <Button
          variant="ghost"
          size="sm"
          icon={ThumbsDown}
          onClick={() => onFeedback(false)}
          className="text-gray-500 hover:text-red-600"
        />
      </div>
    </div>
  );
}