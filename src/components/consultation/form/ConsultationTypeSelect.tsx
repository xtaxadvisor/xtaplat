import React from 'react';
import { Select } from '../../ui/Select';

interface ConsultationTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ConsultationTypeSelect({ value, onChange }: ConsultationTypeSelectProps) {
  const consultationTypes = [
    { value: 'tax-planning', label: 'Tax Planning' },
    { value: 'financial-review', label: 'Financial Review' },
    { value: 'investment-advisory', label: 'Investment Advisory' },
    { value: 'general', label: 'General Consultation' }
  ];

  return (
    <Select
      label="Consultation Type"
      options={consultationTypes}
      value={value}
      onChange={onChange}
      required
    />
  );
}