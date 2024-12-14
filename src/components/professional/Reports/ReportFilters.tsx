import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Select } from '../../ui/Select';

interface ReportFiltersProps {
  dateRange: string;
  setDateRange: (range: string) => void;
  reportType: string;
  setReportType: (type: string) => void;
}

export function ReportFilters({
  dateRange,
  setDateRange,
  reportType,
  setReportType
}: ReportFiltersProps) {
  return (
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
      <div className="flex items-center space-x-2">
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
  );
}