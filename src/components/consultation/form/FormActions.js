import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../../ui/Button';
export function FormActions({ onCancel, isSubmitting }) {
    return (_jsxs("div", { className: "flex justify-end space-x-3", children: [_jsx(Button, { type: "button", variant: "outline", onClick: onCancel, children: "Cancel" }), _jsx(Button, { type: "submit", variant: "primary", disabled: isSubmitting, children: isSubmitting ? 'Scheduling...' : 'Schedule Consultation' })] }));
}
