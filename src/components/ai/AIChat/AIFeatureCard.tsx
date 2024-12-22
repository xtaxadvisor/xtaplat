```typescript
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AIFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function AIFeatureCard({ icon: Icon, title, description, onClick }: AIFeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </button>
  );
}
```