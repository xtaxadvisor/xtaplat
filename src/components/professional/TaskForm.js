import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
export function TaskForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        assignedTo: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx(Input, { label: "Title", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), required: true }), _jsx(Input, { label: "Description", value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), required: true }), _jsx(Input, { type: "date", label: "Due Date", value: formData.dueDate, onChange: (e) => setFormData({ ...formData, dueDate: e.target.value }), required: true }), _jsx(Select, { label: "Priority", options: [
                    { value: 'low', label: 'Low' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'high', label: 'High' }
                ], value: formData.priority, onChange: (value) => setFormData({ ...formData, priority: value }) }), _jsx(Input, { label: "Assigned To", value: formData.assignedTo, onChange: (e) => setFormData({ ...formData, assignedTo: e.target.value }), placeholder: "Enter team member name" }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", children: "Create Task" })] })] }));
}
