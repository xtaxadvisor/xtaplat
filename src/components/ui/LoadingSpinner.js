import { jsx as _jsx } from "react/jsx-runtime";
export function LoadingSpinner() {
    return (_jsx("div", { className: "flex items-center justify-center p-4", children: _jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" }) }));
}
