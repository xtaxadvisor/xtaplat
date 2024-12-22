import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from '../../../ui/Select';
export function EventTrigger({ config, onChange }) {
    return (_jsxs("div", { className: "space-y-4", children: [_jsx(Select, { label: "Trigger Type", options: [
                    { value: 'schedule', label: 'Schedule' },
                    { value: 'event', label: 'Event' },
                    { value: 'condition', label: 'Condition' }
                ], value: config.type, onChange: (value) => onChange({ ...config, type: value }) }), config.type === 'schedule' && (_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(Input, { type: "date", label: "Start Date", value: config.startDate, onChange: (e) => onChange({ ...config, startDate: e.target.value }) }), _jsx(Input, { type: "time", label: "Start Time", value: config.startTime, onChange: (e) => onChange({ ...config, startTime: e.target.value }) })] })), config.type === 'event' && (_jsx(Select, { label: "Event", options: [
                    { value: 'document_uploaded', label: 'Document Uploaded' },
                    { value: 'client_added', label: 'New Client Added' },
                    { value: 'deadline_approaching', label: 'Deadline Approaching' }
                ], value: config.event, onChange: (value) => onChange({ ...config, event: value }) }))] }));
}
