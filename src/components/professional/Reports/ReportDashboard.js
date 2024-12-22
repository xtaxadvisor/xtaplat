<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { FinancialReport } from './FinancialReport';
import { ClientReport } from './ClientReport';
import { PerformanceReport } from './PerformanceReport';
import { useReports } from '../../../hooks/useReports';
import { ReportFilters } from './ReportFilters';
import { ReportExport } from './ReportExport';
export function ReportDashboard() {
    const { dateRange, setDateRange, reportType, setReportType, metrics, isLoading, exportReport } = useReports();
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Reports & Analytics" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(ReportFilters, { dateRange: dateRange, setDateRange: setDateRange, reportType: reportType, setReportType: setReportType }), _jsx(ReportExport, { onExport: exportReport })] })] }), reportType === 'financial' && (_jsx(FinancialReport, { dateRange: dateRange, isLoading: isLoading })), reportType === 'client' && (_jsx(ClientReport, { dateRange: dateRange, isLoading: isLoading })), reportType === 'performance' && (_jsx(PerformanceReport, { dateRange: dateRange, isLoading: isLoading }))] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex items-center space-x-4">
          <ReportFilters dateRange={dateRange} setDateRange={setDateRange} reportType={reportType} setReportType={setReportType}/>
          <ReportExport onExport={exportReport}/>
        </div>
      </div>

      {reportType === 'financial' && (<FinancialReport dateRange={dateRange} isLoading={isLoading}/>)}
      
      {reportType === 'client' && (<ClientReport dateRange={dateRange} isLoading={isLoading}/>)}
      
      {reportType === 'performance' && (<PerformanceReport dateRange={dateRange} isLoading={isLoading}/>)}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
