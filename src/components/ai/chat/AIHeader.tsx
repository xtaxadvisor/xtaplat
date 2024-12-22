import React from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '../../ui/Button';

interface AIHeaderProps {
  onClose: () => void;
}

export function AIHeader({ onClose }: AIHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-blue-100 rounded-full">
          <Bot className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">AI Assistant</h3>
          <p className="text-xs text-gray-500">Always here to help</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        icon={X}
        className="text-gray-500 hover:text-gray-700"
      />
    </div>
  );
}