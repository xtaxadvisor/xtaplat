<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Select } from '../../ui/Select';
export function ConsultationTypeSelect({ value, onChange }) {
    const consultationTypes = [
        { value: 'tax-planning', label: 'Tax Planning' },
        { value: 'financial-review', label: 'Financial Review' },
        { value: 'investment-advisory', label: 'Investment Advisory' },
        { value: 'general', label: 'General Consultation' }
    ];
<<<<<<< HEAD
    return (_jsx(Select, { label: "Consultation Type", options: consultationTypes, value: value, onChange: onChange, required: true }));
=======
    return (<Select label="Consultation Type" options={consultationTypes} value={value} onChange={onChange} required/>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
