import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { formatTimeAgo } from '../../../../utils/date';
import { calculateProcessingTime } from '../../../../utils/documents/processing';
export function ProcessingStatus({ steps, startTime, currentStep }) {
    const processingTime = calculateProcessingTime(startTime);
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm font-medium text-gray-500", children: "Processing Time" }), _jsx("span", { className: "text-sm text-gray-900", children: processingTime })] }), _jsx("div", { className: "relative", children: steps.map((step, index) => (_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${step.status === 'completed' ? 'bg-green-100' :
                                step.status === 'processing' ? 'bg-blue-100' :
                                    step.status === 'error' ? 'bg-red-100' : 'bg-gray-100'}`, children: step.status === 'completed' ? (_jsx(CheckCircle, { className: "h-5 w-5 text-green-600" })) : step.status === 'processing' ? (_jsx(Clock, { className: "h-5 w-5 text-blue-600" })) : step.status === 'error' ? (_jsx(XCircle, { className: "h-5 w-5 text-red-600" })) : (_jsx(Clock, { className: "h-5 w-5 text-gray-400" })) }), _jsxs("div", { className: "ml-4 flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm font-medium text-gray-900", children: step.name }), step.completedAt && (_jsx("span", { className: "text-xs text-gray-500", children: formatTimeAgo(step.completedAt) }))] }), step.error && (_jsx("p", { className: "mt-1 text-sm text-red-600", children: step.error }))] })] }, step.id))) })] }));
}
