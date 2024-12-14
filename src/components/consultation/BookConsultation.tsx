import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { useConsultation } from '../../hooks/useConsultation';

export function BookConsultation() {
  const navigate = useNavigate();
  const { scheduleConsultation, isScheduling } = useConsultation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Book a Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Select
            label="Consultation Type"
            options={[
              { value: 'tax-planning', label: 'Tax Planning' },
              { value: 'financial-review', label: 'Financial Review' },
              { value: 'investment-advisory', label: 'Investment Advisory' }
            ]}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="date"
              label="Date"
              icon={Calendar}
              required
            />
            <Input
              type="time"
              label="Time"
              icon={Clock}
              required
            />
          </div>

          <Input
            label="Additional Notes"
            multiline
            rows={4}
            placeholder="Any specific topics you'd like to discuss?"
          />

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/consultation')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              icon={Video}
              disabled={isScheduling}
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}