import React from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';
import { Select } from '../../../ui/Select';
import type { TriggerConfig } from '../../../../types/automation';

interface EventTriggerProps {
  config: TriggerConfig;
  onChange: (config: TriggerConfig) => void;
}

export function EventTrigger({ config, onChange }: EventTriggerProps) {
  return (
    <div className="space-y-4">
      <Select
        label="Trigger Type"
        options={[
          { value: 'schedule', label: 'Schedule' },
          { value: 'event', label: 'Event' },
          { value: 'condition', label: 'Condition' }
        ]}
        value={config.type}
        onChange={(value) => onChange({ ...config, type: value })}
      />

      {config.type === 'schedule' && (
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="date"
            label="Start Date"
            value={config.startDate}
            onChange={(e) => onChange({ ...config, startDate: e.target.value })}
          />
          <Input
            type="time"
            label="Start Time"
            value={config.startTime}
            onChange={(e) => onChange({ ...config, startTime: e.target.value })}
          />
        </div>
      )}

      {config.type === 'event' && (
        <Select
          label="Event"
          options={[
            { value: 'document_uploaded', label: 'Document Uploaded' },
            { value: 'client_added', label: 'New Client Added' },
            { value: 'deadline_approaching', label: 'Deadline Approaching' }
          ]}
          value={config.event}
          onChange={(value) => onChange({ ...config, event: value })}
        />
      )}
    </div>
  );
}