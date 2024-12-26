import { jsx as _jsx } from "react/jsx-runtime";
import { FileText } from 'lucide-react';
import { Input } from '../../ui/Input';
export function ConsultationNotes({ value, onChange }) {
    return (_jsx(Input, { label: "Additional Notes", icon: FileText, value: value, onChange: (e) => onChange(e.target.value), multiline: true, rows: 4, placeholder: "Any specific topics you'd like to discuss?" }));
}
