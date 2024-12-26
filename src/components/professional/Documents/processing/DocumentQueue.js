import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { formatTimeAgo } from '../../../../utils/date';
export function DocumentQueue({ documents, onProcessDocument }) {
    return (_jsx("div", { className: "space-y-4", children: documents.map((doc) => (_jsxs("div", { className: "bg-white rounded-lg p-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("div", { className: `p-2 rounded-full ${doc.status === 'pending' ? 'bg-yellow-100' :
                                doc.status === 'processing' ? 'bg-blue-100' :
                                    doc.status === 'completed' ? 'bg-green-100' : 'bg-red-100'}`, children: doc.status === 'pending' ? _jsx(Clock, { className: "h-5 w-5 text-yellow-600" }) :
                                doc.status === 'processing' ? _jsx(Clock, { className: "h-5 w-5 text-blue-600" }) :
                                    doc.status === 'completed' ? _jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }) :
                                        _jsx(AlertCircle, { className: "h-5 w-5 text-red-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: doc.name }), _jsxs("p", { className: "text-sm text-gray-500", children: ["Added ", formatTimeAgo(doc.queuedAt)] })] })] }), doc.status === 'pending' && (_jsx("button", { onClick: () => onProcessDocument(doc.id), className: "text-blue-600 hover:text-blue-700 text-sm font-medium", children: "Process Now" }))] }, doc.id))) }));
}
