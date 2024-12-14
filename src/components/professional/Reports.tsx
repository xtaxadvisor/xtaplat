import React, { useState } from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { RevenueChart } from './charts/RevenueChart';
import { ClientDistributionChart } from './charts/ClientDistributionChart';

export function Reports() {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('financial');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <Select
              options={[
                { value: 'week', label: 'This Week' },
                { value: 'month', label: 'This Month' },
                { value: 'quarter', label: 'This Quarter' },
                { value: 'year', label: 'This Year' }
              ]}
              value={dateRange}
              onChange={setDateRange}
            />
          </div>
          <Button variant="outline" icon={Download}>
            Export Report
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <Select
                options={[
                  { value: 'financial', label: 'Financial Reports' },
                  { value: 'client', label: 'Client Reports' },
                  { value: 'performance', label: 'Performance Reports' }
                ]}
                value={reportType}
                onChange={setReportType}
              />
            </div>
          </div>

          {reportType === 'financial' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">$124,500</p>
                  <p className="mt-1 text-sm text-green-600">+12% from last period</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Average Invoice</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">$2,850</p>
                  <p className="mt-1 text-sm text-green-600">+5% from last period</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Outstanding</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">$15,200</p>
                  <p className="mt-1 text-sm text-red-600">+2% from last period</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
                <RevenueChart />
              </div>
            </div>
          )}

          {reportType === 'client' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">156</p>
                  <p className="mt-1 text-sm text-green-600">+8 new this period</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">32</p>
                  <p className="mt-1 text-sm text-green-600">+3 from last period</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Client Satisfaction</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">96%</p>
                  <p className="mt-1 text-sm text-green-600">+2% from last period</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Client Distribution</h3>
                <ClientDistributionChart />
              </div>
            </div>
          )}

          {reportType === 'performance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Tasks Completed</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">245</p>
                  <p className="mt-1 text-sm text-green-600">92% completion rate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Response Time</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">2.5h</p>
                  <p className="mt-1 text-sm text-green-600">-15min from average</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Team Utilization</h3>
                  <p className="mt-2 text-2xl font-semibold text-gray-900">87%</p>
                  <p className="mt-1 text-sm text-green-600">+5% from target</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Performance Reviews</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Tax Return Processing', score: 98, trend: '+2%' },
                      { name: 'Client Communication', score: 95, trend: '+5%' },
                      { name: 'Document Turnaround', score: 92, trend: '+3%' },
                      { name: 'Meeting Deadlines', score: 97, trend: '+1%' }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{metric.name}</span>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${metric.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {metric.score}%
                          </span>
                          <span className="text-sm text-green-600">{metric.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}