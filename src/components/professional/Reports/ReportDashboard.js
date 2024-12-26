import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FinancialReport } from './FinancialReport';
import { ClientReport } from './ClientReport';
import { PerformanceReport } from './PerformanceReport';
import { useReports } from '../../../hooks/useReports';
import { ReportFilters } from './ReportFilters';
import { ReportExport } from './ReportExport';
export function ReportDashboard() {
    const { dateRange, setDateRange, reportType, setReportType, metrics, isLoading, exportReport } = useReports();
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Reports & Analytics" }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(ReportFilters, { dateRange: dateRange, setDateRange: setDateRange, reportType: reportType, setReportType: setReportType }), _jsx(ReportExport, { onExport: exportReport })] })] }), reportType === 'financial' && (_jsx(FinancialReport, { dateRange: dateRange, isLoading: isLoading })), reportType === 'client' && (_jsx(ClientReport, { dateRange: dateRange, isLoading: isLoading })), reportType === 'performance' && (_jsx(PerformanceReport, { dateRange: dateRange, isLoading: isLoading }))] }));
}
