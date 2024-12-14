import React from 'react';
import { FileText } from 'lucide-react';
import { Input } from '../../ui/Input';

interface ConsultationNotesProps {
  value: string;
  onChange: (value: string) => void;
}

export function ConsultationNotes({ value, onChange }: ConsultationNotesProps) {
  return (
    <Input
      label="Additional Notes"
      icon={FileText}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      multiline
      rows={4}
      placeholder="Any specific topics you'd like to discuss?"
    />
  );
}