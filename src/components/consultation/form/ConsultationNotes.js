<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { FileText } from 'lucide-react';
import { Input } from '../../ui/Input';
export function ConsultationNotes({ value, onChange }) {
    return (_jsx(Input, { label: "Additional Notes", icon: FileText, value: value, onChange: (e) => onChange(e.target.value), multiline: true, rows: 4, placeholder: "Any specific topics you'd like to discuss?" }));
=======
import React from 'react';
import { FileText } from 'lucide-react';
import { Input } from '../../ui/Input';
export function ConsultationNotes({ value, onChange }) {
    return (<Input label="Additional Notes" icon={FileText} value={value} onChange={(e) => onChange(e.target.value)} multiline rows={4} placeholder="Any specific topics you'd like to discuss?"/>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
