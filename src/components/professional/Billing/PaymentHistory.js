import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';
export function PaymentHistory({ payments }) {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return _jsx(CheckCircle, { className: "h-5 w-5 text-green-500" });
            case 'pending':
                return _jsx(Clock, { className: "h-5 w-5 text-yellow-500" });
            case 'failed':
                return _jsx(XCircle, { className: "h-5 w-5 text-red-500" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
        }
    };
    return (_jsx("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Payment History" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Amount" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Method" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Reference" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: payments.map((payment) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: format(new Date(payment.date), 'MMM d, yyyy') }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: ["$", payment.amount.toFixed(2)] }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: payment.method }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`, children: [getStatusIcon(payment.status), _jsx("span", { className: "ml-1 capitalize", children: payment.status })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: payment.reference })] }, payment.id))) })] }) })] }) }));
}
