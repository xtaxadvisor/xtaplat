<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Calendar, Clock, Video, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
export function BookingForm({ serviceType, onSubmit, onCancel }) {
    const { user } = useAuth();
    const { addNotification } = useNotificationStore();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        duration: '60',
        notes: '',
        isVirtual: true
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const startTime = new Date(`${formData.date}T${formData.time}`);
        if (startTime < new Date()) {
            addNotification('Please select a future date and time', 'error');
            return;
        }
        const endTime = new Date(startTime.getTime() + parseInt(formData.duration) * 60000);
        onSubmit({
            ...formData,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            type: serviceType,
            clientId: user?.id
        });
    };
<<<<<<< HEAD
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [_jsx("h3", { className: "text-lg font-medium text-blue-900", children: "Booking Details" }), _jsx("p", { className: "mt-1 text-sm text-blue-700", children: serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) })] }), _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { type: "date", label: "Date", icon: Calendar, value: formData.date, onChange: (e) => setFormData({ ...formData, date: e.target.value }), min: new Date().toISOString().split('T')[0], required: true }), _jsx(Input, { type: "time", label: "Time", icon: Clock, value: formData.time, onChange: (e) => setFormData({ ...formData, time: e.target.value }), required: true }), _jsx(Select, { label: "Duration", options: [
                            { value: '30', label: '30 minutes' },
                            { value: '60', label: '1 hour' },
                            { value: '90', label: '1.5 hours' },
                            { value: '120', label: '2 hours' }
                        ], value: formData.duration, onChange: (value) => setFormData({ ...formData, duration: value }) }), _jsx("div", { className: "flex items-center space-x-4", children: _jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Meeting Type" }), _jsxs("div", { className: "mt-1 flex items-center space-x-4", children: [_jsxs("label", { className: "inline-flex items-center", children: [_jsx("input", { type: "radio", className: "form-radio text-blue-600", checked: formData.isVirtual, onChange: () => setFormData({ ...formData, isVirtual: true }) }), _jsxs("span", { className: "ml-2 flex items-center", children: [_jsx(Video, { className: "h-4 w-4 mr-1" }), "Virtual"] })] }), _jsxs("label", { className: "inline-flex items-center", children: [_jsx("input", { type: "radio", className: "form-radio text-blue-600", checked: !formData.isVirtual, onChange: () => setFormData({ ...formData, isVirtual: false }) }), _jsxs("span", { className: "ml-2 flex items-center", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), "In-Person"] })] })] })] }) })] }), _jsx(Input, { label: "Additional Notes", value: formData.notes, onChange: (e) => setFormData({ ...formData, notes: e.target.value }), placeholder: "Any specific topics or questions you'd like to discuss?", multiline: true, rows: 4 }), _jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", children: "Confirm Booking" })] })] }));
=======
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-blue-900">Booking Details</h3>
        <p className="mt-1 text-sm text-blue-700">
          {serviceType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input type="date" label="Date" icon={Calendar} value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split('T')[0]} required/>

        <Input type="time" label="Time" icon={Clock} value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required/>

        <Select label="Duration" options={[
            { value: '30', label: '30 minutes' },
            { value: '60', label: '1 hour' },
            { value: '90', label: '1.5 hours' },
            { value: '120', label: '2 hours' }
        ]} value={formData.duration} onChange={(value) => setFormData({ ...formData, duration: value })}/>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Meeting Type
            </label>
            <div className="mt-1 flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" checked={formData.isVirtual} onChange={() => setFormData({ ...formData, isVirtual: true })}/>
                <span className="ml-2 flex items-center">
                  <Video className="h-4 w-4 mr-1"/>
                  Virtual
                </span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-600" checked={!formData.isVirtual} onChange={() => setFormData({ ...formData, isVirtual: false })}/>
                <span className="ml-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1"/>
                  In-Person
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <Input label="Additional Notes" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Any specific topics or questions you'd like to discuss?" multiline rows={4}/>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Confirm Booking
        </Button>
      </div>
    </form>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
