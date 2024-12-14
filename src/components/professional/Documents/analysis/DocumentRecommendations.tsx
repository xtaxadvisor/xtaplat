import React from 'react';
import { FileText } from 'lucide-react';
import { Recommendation } from '../../../../types/documents';

interface DocumentRecommendationsProps {
  recommendations: Recommendation[];
}

export function DocumentRecommendations({ recommendations }: DocumentRecommendationsProps) {
  return (
    <div className="border rounded-lg p-4">
      <h4 className="font-medium text-gray-900">Recommendations</h4>
      <ul className="mt-2 space-y-2 text-gray-600">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-blue-500" />
            <span>{recommendation.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}