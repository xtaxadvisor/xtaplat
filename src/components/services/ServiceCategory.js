import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ServiceItem } from './ServiceItem';
export function ServiceCategory({ title, icon: Icon, services }) {
    return (_jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 animate-fadeIn", children: [_jsxs("div", { className: "flex items-center mb-8", children: [_jsx("div", { className: "p-3 bg-blue-50 rounded-lg", children: _jsx(Icon, { className: "h-8 w-8 text-blue-600" }) }), _jsx("h2", { className: "ml-4 text-2xl font-bold text-gray-900", children: title })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => (_jsx(ServiceItem, { name: service.name, description: service.description, price: service.price, features: service.features, duration: service.duration }, index))) })] }));
}
