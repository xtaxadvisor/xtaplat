<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Bell, Users, CreditCard, Lock, Building } from 'lucide-react';
import { BillingSettings } from './BillingSettings';
import { NotificationSettings } from './NotificationSettings';
import { TeamSettings } from './TeamSettings';
import { SecuritySettings } from './SecuritySettings';
import { ProfileSettings } from './ProfileSettings';
import { useSettings } from '../../../hooks/useSettings';
export function ProfessionalSettings() {
    const [activeSection, setActiveSection] = useState('profile');
    const { settings, isLoading, updateSettings } = useSettings();
    const sections = [
        { id: 'profile', label: 'Profile Settings', icon: Building },
        { id: 'billing', label: 'Billing Settings', icon: CreditCard },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'team', label: 'Team Management', icon: Users },
        { id: 'security', label: 'Security', icon: Lock },
    ];
    const handleSave = async (sectionData) => {
        await updateSettings({
            section: activeSection,
            data: sectionData
        });
    };
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Settings" }) }), _jsxs("div", { className: "flex gap-6", children: [_jsx("div", { className: "w-64", children: _jsx("nav", { className: "space-y-1", children: sections.map((section) => (_jsxs("button", { onClick: () => setActiveSection(section.id), className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`, children: [_jsx(section.icon, { className: `mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}` }), section.label] }, section.id))) }) }), _jsx("div", { className: "flex-1", children: _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [activeSection === 'profile' && (_jsx(ProfileSettings, { settings: settings?.profile, onSave: handleSave, isLoading: isLoading })), activeSection === 'billing' && (_jsx(BillingSettings, { settings: settings?.billing, onSave: handleSave, isLoading: isLoading })), activeSection === 'notifications' && (_jsx(NotificationSettings, { settings: settings?.notifications, onSave: handleSave, isLoading: isLoading })), activeSection === 'team' && (_jsx(TeamSettings, { settings: settings?.team, onSave: handleSave, isLoading: isLoading })), activeSection === 'security' && (_jsx(SecuritySettings, { settings: settings?.security, onSave: handleSave, isLoading: isLoading }))] }) }) })] })] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="flex gap-6">
        <div className="w-64">
          <nav className="space-y-1">
            {sections.map((section) => (<button key={section.id} onClick={() => setActiveSection(section.id)} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === section.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <section.icon className={`mr-3 h-5 w-5 ${activeSection === section.id ? 'text-blue-600' : 'text-gray-400'}`}/>
                {section.label}
              </button>))}
          </nav>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              {activeSection === 'profile' && (<ProfileSettings settings={settings?.profile} onSave={handleSave} isLoading={isLoading}/>)}
              {activeSection === 'billing' && (<BillingSettings settings={settings?.billing} onSave={handleSave} isLoading={isLoading}/>)}
              {activeSection === 'notifications' && (<NotificationSettings settings={settings?.notifications} onSave={handleSave} isLoading={isLoading}/>)}
              {activeSection === 'team' && (<TeamSettings settings={settings?.team} onSave={handleSave} isLoading={isLoading}/>)}
              {activeSection === 'security' && (<SecuritySettings settings={settings?.security} onSave={handleSave} isLoading={isLoading}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
