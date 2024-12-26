import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, Clock } from 'lucide-react';
import { Input } from '../../ui/Input';
export function DateTimeSelect({ date, time, onDateChange, onTimeChange }) {
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { type: "date", label: "Date", icon: Calendar, value: date, onChange: (e) => onDateChange(e.target.value), required: true, min: new Date().toISOString().split('T')[0] }), _jsx(Input, { type: "time", label: "Time", icon: Clock, value: time, onChange: (e) => onTimeChange(e.target.value), required: true })] }));
}
