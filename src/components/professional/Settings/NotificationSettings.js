<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Bell, Mail } from 'lucide-react';
import { Button } from '../../ui/Button';
export function NotificationSettings({ settings, onSave, isLoading }) {
    const [notifications, setNotifications] = useState({
        email: {
            newClient: settings?.email?.newClient ?? true,
            documentUploads: settings?.email?.documentUploads ?? true,
            taskAssignments: settings?.email?.taskAssignments ?? true,
            appointments: settings?.email?.appointments ?? true,
            billing: settings?.email?.billing ?? true,
        },
        push: {
            newClient: settings?.push?.newClient ?? true,
            documentUploads: settings?.push?.documentUploads ?? true,
            taskAssignments: settings?.push?.taskAssignments ?? true,
            appointments: settings?.push?.appointments ?? true,
            billing: settings?.push?.billing ?? true,
        }
    });
    const handleToggle = (type, key) => {
        setNotifications(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [key]: !prev[type][key]
            }
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(notifications);
    };
<<<<<<< HEAD
    return (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Email Notifications" }), _jsx("div", { className: "space-y-4", children: Object.entries(notifications.email).map(([key, value]) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-5 w-5 text-gray-400 mr-3" }), _jsx("span", { className: "text-sm text-gray-700", children: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) })] }), _jsx("div", { className: "flex items-center", children: _jsx("input", { type: "checkbox", checked: value, onChange: () => handleToggle('email', key), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }) })] }, key))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Push Notifications" }), _jsx("div", { className: "space-y-4", children: Object.entries(notifications.push).map(([key, value]) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Bell, { className: "h-5 w-5 text-gray-400 mr-3" }), _jsx("span", { className: "text-sm text-gray-700", children: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) })] }), _jsx("div", { className: "flex items-center", children: _jsx("input", { type: "checkbox", checked: value, onChange: () => handleToggle('push', key), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }) })] }, key))) })] }), _jsx("div", { className: "flex justify-end", children: _jsx(Button, { type: "submit", variant: "primary", disabled: isLoading, icon: Bell, children: isLoading ? 'Saving...' : 'Save Notification Settings' }) })] }));
=======
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {Object.entries(notifications.email).map(([key, value]) => (<div key={key} className="flex items-center justify-between">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3"/>
                <span className="text-sm text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={value} onChange={() => handleToggle('email', key)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              </div>
            </div>))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
        <div className="space-y-4">
          {Object.entries(notifications.push).map(([key, value]) => (<div key={key} className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-gray-400 mr-3"/>
                <span className="text-sm text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" checked={value} onChange={() => handleToggle('push', key)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              </div>
            </div>))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="primary" disabled={isLoading} icon={Bell}>
          {isLoading ? 'Saving...' : 'Save Notification Settings'}
        </Button>
      </div>
    </form>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
