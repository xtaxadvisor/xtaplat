import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FileText, Download, Trash2, Share2, History, Eye, MoreVertical, Clock } from 'lucide-react';
import { Button } from '../../ui/Button';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function DocumentGrid({ documents, isLoading, onDelete, onShare }) {
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    const getStatusColor = (status) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'rejected':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: documents.map((doc) => (_jsx("div", { className: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(FileText, { className: "h-8 w-8 text-blue-500" }), _jsxs("div", { className: "ml-3", children: [_jsx("h3", { className: "text-sm font-medium text-gray-900", children: doc.title }), _jsx("p", { className: "text-sm text-gray-500", children: doc.type })] })] }), _jsxs("div", { className: "relative group", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: MoreVertical, className: "text-gray-400 hover:text-gray-500" }), _jsx("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block", children: _jsxs("div", { className: "py-1", children: [_jsxs("button", { className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full", children: [_jsx(Eye, { className: "h-4 w-4 mr-2" }), "View Details"] }), _jsxs("button", { className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full", children: [_jsx(Download, { className: "h-4 w-4 mr-2" }), "Download"] }), _jsxs("button", { className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full", children: [_jsx(Share2, { className: "h-4 w-4 mr-2" }), "Share"] }), _jsxs("button", { className: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full", children: [_jsx(History, { className: "h-4 w-4 mr-2" }), "Version History"] }), _jsxs("button", { className: "flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full", children: [_jsx(Trash2, { className: "h-4 w-4 mr-2" }), "Delete"] })] }) })] })] }), _jsx("div", { className: "mt-4", children: _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), new Date(doc.uploadedAt).toLocaleDateString()] }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`, children: doc.status })] }) }), doc.tags && doc.tags.length > 0 && (_jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: doc.tags.map((tag, index) => (_jsx("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800", children: tag }, index))) }))] }) }, doc.id))) }));
}
