import React from 'react';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

export function AIDocumentAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">AI Document Analysis</h3>
      
      <div className="space-y-4">
        {/* Document Summary */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium text-gray-900">Key Findings</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span className="text-gray-600">All required tax forms present</span>
            </div>
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <span className="text-gray-600">Potential discrepancy in reported income</span>
            </div>
          </div>
        </div>

        {/* Automated Suggestions */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium text-gray-900">Recommendations</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-blue-500" />
              <span>Request missing W-2 form from employer</span>
            </li>
            <li className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-blue-500" />
              <span>Verify reported business expenses</span>
            </li>
          </ul>
        </div>

        <Button variant="primary" className="w-full">
          Generate Detailed Report
        </Button>
      </div>
    </div>
  );
}