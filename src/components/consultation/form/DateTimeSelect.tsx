import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Input } from '../../ui/Input';

interface DateTimeSelectProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export function DateTimeSelect({
  date,
  time,
  onDateChange,
  onTimeChange
}: DateTimeSelectProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Input
        type="date"
        label="Date"
        icon={Calendar}
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        required
        min={new Date().toISOString().split('T')[0]}
      />
      <Input
        type="time"
        label="Time"
        icon={Clock}
        value={time}
        onChange={(e) => onTimeChange(e.target.value)}
        required
      />
    </div>
  );
}