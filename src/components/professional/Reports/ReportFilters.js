import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, Filter } from 'lucide-react';
import { Select } from '../../ui/Select';
export function ReportFilters({ dateRange, setDateRange, reportType, setReportType }) {
    return (_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Calendar, { className: "h-5 w-5 text-gray-400" }), _jsx(Select, { options: [
                            { value: 'week', label: 'This Week' },
                            { value: 'month', label: 'This Month' },
                            { value: 'quarter', label: 'This Quarter' },
                            { value: 'year', label: 'This Year' }
                        ], value: dateRange, onChange: setDateRange })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsx(Select, { options: [
                            { value: 'financial', label: 'Financial Reports' },
                            { value: 'client', label: 'Client Reports' },
                            { value: 'performance', label: 'Performance Reports' }
                        ], value: reportType, onChange: setReportType })] })] }));
}
