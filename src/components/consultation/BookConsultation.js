import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { useConsultation } from '../../hooks/useConsultation';
export function BookConsultation() {
    const navigate = useNavigate();
    const { scheduleConsultation, isScheduling } = useConsultation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here
    };
    return (_jsx("div", { className: "max-w-2xl mx-auto", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Book a Consultation" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Select, { label: "Consultation Type", options: [
                                { value: 'tax-planning', label: 'Tax Planning' },
                                { value: 'financial-review', label: 'Financial Review' },
                                { value: 'investment-advisory', label: 'Investment Advisory' }
                            ], required: true }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsx(Input, { type: "date", label: "Date", icon: Calendar, required: true }), _jsx(Input, { type: "time", label: "Time", icon: Clock, required: true })] }), _jsx(Input, { label: "Additional Notes", multiline: true, rows: 4, placeholder: "Any specific topics you'd like to discuss?" }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => navigate('/consultation'), children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", icon: Video, disabled: isScheduling, children: "Schedule Consultation" })] })] })] }) }));
}
