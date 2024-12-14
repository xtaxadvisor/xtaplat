import React from 'react';
import { Plus, ArrowRight, Settings } from 'lucide-react';
import { Button } from '../../ui/Button';

export function WorkflowBuilder() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Workflow Automation</h2>
        <Button variant="primary" icon={Plus}>
          Create Workflow
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          {/* Workflow Template */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900">New Client Onboarding</h3>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-1 flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <Button variant="outline" size="sm" icon={Settings}>
                Configure
              </Button>
            </div>
          </div>

          {/* Add more workflow templates */}
        </div>
      </div>
    </div>
  );
}