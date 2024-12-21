import React from 'react';
import { FileText } from 'lucide-react';
import { Input } from '../../ui/Input';
export function ConsultationNotes({ value, onChange }) {
    return (<Input label="Additional Notes" icon={FileText} value={value} onChange={(e) => onChange(e.target.value)} multiline rows={4} placeholder="Any specific topics you'd like to discuss?"/>);
}
