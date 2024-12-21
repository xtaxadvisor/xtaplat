import React from 'react';
import { Select } from '../../ui/Select';
export function ConsultationTypeSelect({ value, onChange }) {
    const consultationTypes = [
        { value: 'tax-planning', label: 'Tax Planning' },
        { value: 'financial-review', label: 'Financial Review' },
        { value: 'investment-advisory', label: 'Investment Advisory' },
        { value: 'general', label: 'General Consultation' }
    ];
    return (<Select label="Consultation Type" options={consultationTypes} value={value} onChange={onChange} required/>);
}
