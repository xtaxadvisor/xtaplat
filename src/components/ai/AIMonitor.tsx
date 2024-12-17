import React from 'react';
import { Activity, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { aiManager } from '../../services/ai/AIManager';
import { Card } from '../ui/Card';

export function AIMonitor() {
  const [metrics, setMetrics] = React.useState(aiManager.getMetrics());
  const [history, setHistory] = React.useState(aiManager.getHistory());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(aiManager.getMetrics());
      setHistory(aiManager.getHistory());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">AI System Monitor</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={Activity}
          title="Total Requests"
          value={metrics.totalRequests.toString()}
          description="Total AI interactions"
        />
        <Card
          icon={Clock}
          title="Average Response Time"
          value={`${Math.round(metrics.averageResponseTime)}ms`}
          description="Response latency"
        />
        <Card
          icon={AlertCircle}
          title="Error Rate"
          value={`${(metrics.errorRate * 100).toFixed(2)}%`}
          description="Failed requests"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Interactions</h3>
        <div className="space-y-4">
          {history.map((message, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`flex-shrink-0 ${
                message.role === 'user' ? 'bg-blue-100' : 'bg-green-100'
              } rounded-full p-2`}>
                {message.role === 'user' ? (
                  <Activity className="h-5 w-5 text-blue-600" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {message.role === 'user' ? 'User' : 'AI Assistant'}
                </p>
                <p className="text-sm text-gray-600">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}