import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, Calendar } from 'lucide-react';
import { Card } from '../../ui/Card';
export function ClientInsights() {
    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Financial Health Score" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "h-4 bg-green-500 rounded-full progress-bar" }), _jsx("div", { className: "h-4 bg-green-500 rounded-full", style: { width: '85%' } })] }), _jsxs("div", { className: "mt-4 grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Savings" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "92/100" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Investments" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "78/100" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-sm font-medium text-gray-500", children: "Tax Planning" }), _jsx("div", { className: "text-lg font-semibold text-gray-900", children: "85/100" })] })] })] }), _jsx("span", { className: "ml-4 text-2xl font-bold text-green-500", children: "85/100" })] }) })) /* Action Items */;
    { /* Action Items */ }
    _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Card, { icon: AlertCircle, title: "Required Actions", value: 3, description: "Tasks needing attention" }), _jsx(Card, { icon: Calendar, title: "Upcoming Deadlines", value: 2, description: "In the next 30 days" })] });
    { /* Document Timeline */ }
    _jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Documents" }), _jsx("div", { className: "space-y-4" })] }) });
    div >
    ;
    ;
}
