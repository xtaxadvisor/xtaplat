import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Bell, Mail, Lock, User, Shield, Smartphone, Globe } from 'lucide-react';
import { Input } from '../ui/Input';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
;
export function Settings() {
    const { user } = useAuth();
    const { addNotification } = useNotificationStore();
    const [activeSection, setActiveSection] = useState('profile');
    const [loading, setLoading] = useState(false);
    const sections = [
        { id: 'profile', title: 'Profile Information', icon: User },
        { id: 'security', title: 'Security', icon: Shield },
        { id: 'notifications', title: 'Notifications', icon: Bell },
        { id: 'preferences', title: 'Preferences', icon: Globe }
    ];
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        language: 'en',
        timezone: 'UTC',
        emailNotifications: true,
        pushNotifications: true,
        twoFactorAuth: false
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            addNotification('Settings updated successfully', 'success');
        }
        catch (error) {
            addNotification('Failed to update settings', 'error');
        }
        finally {
            setLoading(false);
        }
        const renderSection = () => {
            switch (activeSection) {
                case 'profile':
                    return (_jsx("form", { onSubmit: handleSubmit, className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { label: "Full Name", icon: User, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Enter your full name" }), _jsx(Input, { label: "Email", type: "email", icon: Mail, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "Enter your email" }), _jsx(Input, { label: "Phone Number", icon: Smartphone, value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), placeholder: "Enter your phone number" }), _jsxs("div", { children: [_jsx("label", { htmlFor: "language", className: "block text-sm font-medium text-gray-700", children: "Language" }), _jsx("label", { htmlFor: "language", className: "block text-sm font-medium text-gray-700", children: "Language" }), _jsxs("select", { id: "language", value: formData.language, onChange: (e) => setFormData({ ...formData, language: e.target.value }), className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", title: "Select your language", children: [_jsx("option", { value: "en", children: "English" }), _jsx("option", { value: "es", children: "Spanish" }), _jsx("option", { value: "fr", children: "French" })] })] })] }) }));
                case 'security':
                    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Password" }), _jsxs("form", { className: "space-y-4", children: [_jsx(Input, { type: "password", label: "Current Password", placeholder: "Enter your current password" }), _jsx(Input, { type: "password", label: "New Password", icon: Lock, placeholder: "Enter your new password" }), _jsx(Input, { type: "password", label: "Confirm New Password", icon: Lock, placeholder: "Confirm your new password" })] })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Two-Factor Authentication" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: _jsx("p", { className: "text-sm text-gray-500", children: "Add an extra layer of security to your account" }) }), _jsx("div", { className: "flex items-center", children: _jsx("input", { type: "checkbox", checked: formData.twoFactorAuth, onChange: (e) => setFormData({ ...formData, twoFactorAuth: e.target.checked }), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded", title: "Enable Two-Factor Authentication" }) })] })] })] }));
                case 'notifications':
                    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Email Notifications" }), _jsx("div", { className: "space-y-4", children: [
                                            'New document uploads',
                                            'Meeting reminders',
                                            'Task assignments',
                                            'System updates'
                                        ].map((item, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-700", children: item }), _jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" })] }, index))) })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Push Notifications" }), _jsx("div", { className: "space-y-4", children: [
                                            'Important alerts',
                                            'Deadline reminders',
                                            'Chat messages',
                                            'Status updates'
                                        ].map((item, index) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-gray-700", children: item }), _jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" })] }, index))) })] })] }));
                case 'preferences':
                    return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Display Settings" }), _jsxs("div", { className: "space-y-4", children: [_jsx("label", { htmlFor: "timezone", className: "block text-sm font-medium text-gray-700", children: "Timezone" }), _jsxs("select", { id: "timezone", value: formData.timezone, onChange: (e) => setFormData({ ...formData, timezone: e.target.value }), className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { value: "UTC", children: "UTC" }), _jsx("option", { value: "EST", children: "Eastern Time" }), _jsx("option", { value: "PST", children: "Pacific Time" })] }), _jsx("label", { htmlFor: "date-format", className: "block text-sm font-medium text-gray-700", children: "Date Format" }), _jsxs("select", { id: "date-format", title: "Select date format", className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { children: "MM/DD/YYYY" }), _jsx("option", { children: "DD/MM/YYYY" }), _jsx("option", { children: "YYYY-MM-DD" })] }), _jsx("option", { children: "YYYY-MM-DD" })] })] }) }));
            }
        };
    };
    div >
    ;
    ;
}
return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Settings" }), _jsx(Button, { variant: "primary", icon: Save, onClick: handleSubmit, disabled: loading, children: loading ? 'Saving...' : 'Save Changes' })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-64", children: _jsx("nav", { className: "space-y-1", children: sections.map((section) => (_jsxs("button", { onClick: () => setActiveSection(section.id), className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(section.icon, { className: `mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}` }), section.title] }, section.id))) }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsx("div", { className: "p-6", children: renderSection() }) }) })] })] }));
return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Settings" }), _jsx(Button, { variant: "primary", icon: Save, onClick: handleSubmit, disabled: loading, children: loading ? 'Saving...' : 'Save Changes' })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-64", children: _jsx("nav", { className: "space-y-1", children: sections.map((section) => (_jsxs("button", { onClick: () => setActiveSection(section.id), className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(section.icon, { className: `mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}` }), section.title] }, section.id))) }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsx("div", { className: "p-6", children: renderSection() }) }) })] })] }));
