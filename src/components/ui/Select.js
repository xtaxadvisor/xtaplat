import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Select({ label, options, error, onChange, className = '', ...props }) {
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: label })), _jsx("select", { className: `
          block w-full rounded-md shadow-sm pl-3 pr-10 py-2
          ${error
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}
          ${className}
        `, onChange: (e) => onChange?.(e.target.value), ...props, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) }), error && _jsx("p", { className: "mt-1 text-sm text-red-600", children: error })] }));
}
