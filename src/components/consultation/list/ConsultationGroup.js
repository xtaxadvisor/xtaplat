import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ConsultationCard } from '../ConsultationCard';
export function ConsultationGroup({ title, consultations, onJoin, onCancel, onReschedule }) {
    return (_jsxs("div", { children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: title }), _jsx("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-2", children: consultations.map(consultation => (_jsx(ConsultationCard, { consultation: consultation, onJoin: onJoin ? () => onJoin(consultation) : undefined, onCancel: onCancel ? () => onCancel(consultation) : undefined, onReschedule: onReschedule ? () => onReschedule(consultation) : undefined }, consultation.id))) })] }));
}
