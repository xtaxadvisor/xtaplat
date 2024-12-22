<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Bell, Mail, Lock, User, Shield, Smartphone, Globe, Save } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useAuth } from '../../contexts/AuthContext';
import { useNotificationStore } from '../../lib/store';
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
    };
    const renderSection = () => {
        switch (activeSection) {
            case 'profile':
<<<<<<< HEAD
                return (_jsx("form", { onSubmit: handleSubmit, className: "space-y-6", children: _jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsx(Input, { label: "Full Name", icon: User, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }) }), _jsx(Input, { label: "Email", type: "email", icon: Mail, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }) }), _jsx(Input, { label: "Phone Number", icon: Smartphone, value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }) }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Language" }), _jsxs("select", { value: formData.language, onChange: (e) => setFormData({ ...formData, language: e.target.value }), className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { value: "en", children: "English" }), _jsx("option", { value: "es", children: "Spanish" }), _jsx("option", { value: "fr", children: "French" })] })] })] }) }));
            case 'security':
                return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Password" }), _jsxs("form", { className: "space-y-4", children: [_jsx(Input, { type: "password", label: "Current Password", icon: Lock }), _jsx(Input, { type: "password", label: "New Password", icon: Lock }), _jsx(Input, { type: "password", label: "Confirm New Password", icon: Lock })] })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Two-Factor Authentication" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: _jsx("p", { className: "text-sm text-gray-500", children: "Add an extra layer of security to your account" }) }), _jsx("div", { className: "flex items-center", children: _jsx("input", { type: "checkbox", checked: formData.twoFactorAuth, onChange: (e) => setFormData({ ...formData, twoFactorAuth: e.target.checked }), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }) })] })] })] }));
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
                return (_jsx("div", { className: "space-y-6", children: _jsxs("div", { className: "bg-white p-6 rounded-lg shadow", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "Display Settings" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Timezone" }), _jsxs("select", { value: formData.timezone, onChange: (e) => setFormData({ ...formData, timezone: e.target.value }), className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { value: "UTC", children: "UTC" }), _jsx("option", { value: "EST", children: "Eastern Time" }), _jsx("option", { value: "PST", children: "Pacific Time" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Date Format" }), _jsxs("select", { className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500", children: [_jsx("option", { children: "MM/DD/YYYY" }), _jsx("option", { children: "DD/MM/YYYY" }), _jsx("option", { children: "YYYY-MM-DD" })] })] })] })] }) }));
=======
                return (<form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input label="Full Name" icon={User} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
              <Input label="Email" type="email" icon={Mail} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
              <Input label="Phone Number" icon={Smartphone} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          </form>);
            case 'security':
                return (<div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
              <form className="space-y-4">
                <Input type="password" label="Current Password" icon={Lock}/>
                <Input type="password" label="New Password" icon={Lock}/>
                <Input type="password" label="Confirm New Password" icon={Lock}/>
              </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" checked={formData.twoFactorAuth} onChange={(e) => setFormData({ ...formData, twoFactorAuth: e.target.checked })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                </div>
              </div>
            </div>
          </div>);
            case 'notifications':
                return (<div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {[
                        'New document uploads',
                        'Meeting reminders',
                        'Task assignments',
                        'System updates'
                    ].map((item, index) => (<div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item}</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                  </div>))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
              <div className="space-y-4">
                {[
                        'Important alerts',
                        'Deadline reminders',
                        'Chat messages',
                        'Status updates'
                    ].map((item, index) => (<div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item}</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                  </div>))}
              </div>
            </div>
          </div>);
            case 'preferences':
                return (<div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Display Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Timezone</label>
                  <select value={formData.timezone} onChange={(e) => setFormData({ ...formData, timezone: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Time</option>
                    <option value="PST">Pacific Time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date Format</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
          </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
            default:
                return null;
        }
    };
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Settings" }), _jsx(Button, { variant: "primary", icon: Save, onClick: handleSubmit, disabled: loading, children: loading ? 'Saving...' : 'Save Changes' })] }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-64", children: _jsx("nav", { className: "space-y-1", children: sections.map((section) => (_jsxs("button", { onClick: () => setActiveSection(section.id), className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(section.icon, { className: `mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}` }), section.title] }, section.id))) }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsx("div", { className: "p-6", children: renderSection() }) }) })] })] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <Button variant="primary" icon={Save} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="w-64">
          <nav className="space-y-1">
            {sections.map((section) => (<button key={section.id} onClick={() => setActiveSection(section.id)} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <section.icon className={`mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}`}/>
                {section.title}
              </button>))}
          </nav>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
