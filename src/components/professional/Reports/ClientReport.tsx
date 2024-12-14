import React from 'react';
import { Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ClientDistributionChart } from '../charts/ClientDistributionChart';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

interface ClientReportProps {
  dateRange: string;
  isLoading: boolean;
}

export function ClientReport({ dateRange, isLoading }: ClientReportProps) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Clients</p>
              <p className="text-2xl font-semibold text-gray-900">156</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8 new this period
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Projects</p>
              <p className="text-2xl font-semibold text-gray-900">32</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                3 new this period
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Client Retention</p>
              <p className="text-2xl font-semibold text-gray-900">95%</p>
              <p className="mt-1 text-sm text-green-600 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                2% increase
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Client Distribution</h3>
            <ClientDistributionChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Client Engagement</h3>
            <div className="space-y-4">
              {[
                { metric: 'Meeting Attendance', value: 92, trend: '+3%' },
                { metric: 'Document Submission', value: 88, trend: '+5%' },
                { metric: 'Response Rate', value: 95, trend: '+2%' },
                { metric: 'Satisfaction Score', value: 4.8, trend: '+0.2' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{item.metric}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(item.value / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.value}
                    </span>
                    <span className="text-sm text-green-600">{item.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}