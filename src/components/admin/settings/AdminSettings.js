import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Save, Bell, Shield, Database, Globe } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Select } from '../../ui/Select';
import { useSettings } from '../../../hooks/useSettings';
export function AdminSettings() {
    const { settings, updateSettings, isLoading } = useSettings();
    const [activeSection, setActiveSection] = useState('general');
    const sections = [
        { id: 'general', label: 'General Settings', icon: Globe },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'database', label: 'Database', icon: Database }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Admin Settings" }), _jsx(Button, { variant: "primary", icon: Save, disabled: isLoading, children: "Save Changes" })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-64", children: _jsx("nav", { className: "space-y-1", children: sections.map((section) => (_jsxs("button", { onClick: () => setActiveSection(section.id), className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(section.icon, { className: `mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}` }), section.label] }, section.id))) }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [activeSection === 'general' && (_jsxs("div", { className: "space-y-6", children: [_jsx(Input, { label: "Site Name", defaultValue: settings?.general?.siteName }), _jsx(Input, { label: "Support Email", type: "email", defaultValue: settings?.general?.supportEmail }), _jsx(Select, { label: "Default Language", options: [
                                                    { value: 'en', label: 'English' },
                                                    { value: 'es', label: 'Spanish' },
                                                    { value: 'fr', label: 'French' }
                                                ], value: settings?.general?.defaultLanguage })] })), activeSection === 'security' && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Two-Factor Authentication" }), _jsx("p", { className: "text-sm text-gray-500", children: "Require 2FA for all admin users" })] }), _jsx("input", { type: "checkbox", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", defaultChecked: settings?.security?.twoFactorEnabled })] }), _jsx(Input, { label: "Session Timeout (minutes)", type: "number", defaultValue: settings?.security?.sessionTimeout })] })), activeSection === 'notifications' && (_jsx("div", { className: "space-y-6", children: _jsx("div", { className: "space-y-4", children: ['userRegistration', 'systemAlerts', 'securityAlerts'].map((setting) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: _jsx("h3", { className: "text-sm font-medium text-gray-900", children: setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) }) }), _jsx("input", { type: "checkbox", className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", defaultChecked: settings?.notifications?.[setting], title: setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()) })] }, setting))) }) })), activeSection === 'database' && (_jsxs("div", { className: "space-y-6", children: [_jsx(Input, { label: "Backup Schedule", defaultValue: settings?.database?.backupSchedule }), _jsx(Input, { label: "Retention Period (days)", type: "number", defaultValue: settings?.database?.retentionPeriod })] }))] }) }) })] })] }));
}
