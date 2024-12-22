import React from 'react';
import { AIMonitor } from '../../components/ai/AIMonitor';
import { useAIMonitoring } from '../../hooks/useAIMonitoring';
import { Button } from '../../components/ui/Button';
import { Bug, Trash2 } from 'lucide-react';

export default function AIMonitoringDashboard() {
  const { 
    isDebugEnabled, 
    toggleDebug, 
    clearHistory 
  } = useAIMonitoring();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">AI System Monitor</h1>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            icon={Bug}
            onClick={toggleDebug}
          >
            {isDebugEnabled ? 'Disable' : 'Enable'} Debug Mode
          </Button>
          <Button
            variant="outline"
            icon={Trash2}
            onClick={clearHistory}
          >
            Clear History
          </Button>
        </div>
      </div>

      <AIMonitor />
    </div>
  );
}