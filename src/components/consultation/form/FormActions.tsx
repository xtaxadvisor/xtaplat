import React from 'react';
import { Button } from '../../ui/Button';

interface FormActionsProps {
  onCancel: () => void;
  isSubmitting?: boolean;
}

export function FormActions({ onCancel, isSubmitting }: FormActionsProps) {
  return (
    <div className="flex justify-end space-x-3">
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
      </Button>
    </div>
  );
}