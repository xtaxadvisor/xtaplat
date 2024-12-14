import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { identifyAnomalies } from '../../../../utils/analytics/insights';
import { formatDate } from '../../../../utils/date';

interface AnomalyDetectionProps {
  data: Array<{ date: string; value: number }>;
  metric: string;
  threshold?: number;
}

export function AnomalyDetection({ data, metric, threshold = 2 }: AnomalyDetectionProps) {
  const values = data.map(d => d.value);
  const anomalies = identifyAnomalies(values, threshold);
  
  if (anomalies.length === 0) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
        <div className="ml-3">
          <h4 className="text-sm font-medium text-yellow-800">
            Anomalies Detected in {metric}
          </h4>
          <ul className="mt-2 space-y-1">
            {anomalies.map(index => (
              <li key={index} className="text-sm text-yellow-700">
                Unusual value ({data[index].value}) detected on {formatDate(data[index].date)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}