import React, { useState } from 'react';
import { Calendar, Clock, FileText, Video } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { useAuth } from '../../contexts/AuthContext';

interface ConsultationFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  professionals?: Array<{ id: string; name: string }>;
}

export function ConsultationForm({ onSubmit, onCancel, professionals }: ConsultationFormProps) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    professionalId: '',
    date: '',
    time: '',
    type: 'tax-planning',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const startTime = new Date(`${formData.date}T${formData.time}`);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour duration

    onSubmit({
      clientId: user?.id,
      professionalId: formData.professionalId,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      type: formData.type,
      notes: formData.notes
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Select
        label="Consultation Type"
        options={[
          { value: 'tax-planning', label: 'Tax Planning' },
          { value: 'financial-review', label: 'Financial Review' },
          { value: 'investment-advisory', label: 'Investment Advisory' },
          { value: 'general', label: 'General Consultation' }
        ]}
        value={formData.type}
        onChange={(value) => setFormData({ ...formData, type: value })}
        required
      />

      {professionals && (
        <Select
          label="Select Professional"
          options={professionals.map(p => ({ value: p.id, label: p.name }))}
          value={formData.professionalId}
          onChange={(value) => setFormData({ ...formData, professionalId: value })}
          required
        />
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          type="date"
          label="Date"
          icon={Calendar}
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
          min={new Date().toISOString().split('T')[0]}
        />

        <Input
          type="time"
          label="Time"
          icon={Clock}
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />
      </div>

      <Input
        label="Additional Notes"
        icon={FileText}
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        multiline
        rows={4}
        placeholder="Any specific topics you'd like to discuss?"
      />

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center">
          <Video className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-sm text-blue-700">
            Virtual consultation will be conducted via secure video conferencing.
            Meeting link will be sent to your email after scheduling.
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Schedule Consultation
        </Button>
      </div>
    </form>
  );
}