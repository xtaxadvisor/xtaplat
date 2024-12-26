import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
export function InsightCard({ insight }) {
    const getIcon = () => {
        switch (insight.type) {
            case 'positive':
                return _jsx(TrendingUp, { className: "h-5 w-5 text-green-500" });
            case 'negative':
                return _jsx(TrendingDown, { className: "h-5 w-5 text-red-500" });
            case 'warning':
                return _jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-500" });
        }
    };
    const getBackgroundColor = () => {
        switch (insight.type) {
            case 'positive':
                return 'bg-green-50 border-green-200';
            case 'negative':
                return 'bg-red-50 border-red-200';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200';
        }
    };
    return (_jsx("div", { className: `rounded-lg p-4 border ${getBackgroundColor()}`, children: _jsxs("div", { className: "flex items-start", children: [getIcon(), _jsxs("div", { className: "ml-3", children: [_jsx("h4", { className: "text-sm font-medium", children: insight.metric }), _jsx("p", { className: "mt-1 text-sm", children: insight.message })] })] }) }));
}
