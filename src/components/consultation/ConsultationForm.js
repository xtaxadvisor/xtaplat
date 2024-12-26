import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Calendar, Clock, FileText, Video } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { useAuth } from '../../contexts/AuthContext';
export function ConsultationForm({ onSubmit, onCancel, professionals }) {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        professionalId: '',
        date: '',
        time: '',
        type: 'tax-planning',
        notes: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const startTime = new Date(`${formData.date}T${formData.time}`);
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour duration
        onSubmit({
            clientId: user?.id,
            professionalId: formData.professionalId,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            type: formData.type,
            notes: formData.notes
        });
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Select, { label: "Consultation Type", options: [
                    { value: 'tax-planning', label: 'Tax Planning' },
                    { value: 'financial-review', label: 'Financial Review' },
                    { value: 'investment-advisory', label: 'Investment Advisory' },
                    { value: 'general', label: 'General Consultation' }
                ], value: formData.type, onChange: (value) => setFormData({ ...formData, type: value }), required: true }), professionals && (_jsx(Select, { label: "Select Professional", options: professionals.map(p => ({ value: p.id, label: p.name })), value: formData.professionalId, onChange: (value) => setFormData({ ...formData, professionalId: value }), required: true })), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { type: "date", label: "Date", icon: Calendar, value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), required: true, min: new Date().toISOString().split('T')[0] }), _jsx(Input, { type: "time", label: "Time", icon: Clock, value: formData.time, onChange: (e) => setFormData({ ...formData, time: e.target.value }), required: true })] }), _jsx(Input, { label: "Additional Notes", icon: FileText, value: formData.notes, onChange: (e) => setFormData({ ...formData, notes: e.target.value }), multiline: true, rows: 4, placeholder: "Any specific topics you'd like to discuss?" }), _jsx("div", { className: "bg-blue-50 p-4 rounded-lg", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Video, { className: "h-5 w-5 text-blue-500 mr-2" }), _jsx("p", { className: "text-sm text-blue-700", children: "Virtual consultation will be conducted via secure video conferencing. Meeting link will be sent to your email after scheduling." })] }) }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", children: "Schedule Consultation" })] })] }));
}
