import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Users, 
  CreditCard, 
  Lock,
  Mail,
  Building,
  Save
} from 'lucide-react';
import { Button } from '../../ui/Button';
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

  const handleSave = async (sectionData: any) => {
    await updateSettings({
      section: activeSection,
      data: sectionData
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="flex gap-6">
        <div className="w-64">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <section.icon className={`mr-3 h-5 w-5 ${
                  activeSection === section.id ? 'text-blue-600' : 'text-gray-400'
                }`} />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              {activeSection === 'profile' && (
                <ProfileSettings 
                  settings={settings?.profile}
                  onSave={handleSave}
                  isLoading={isLoading}
                />
              )}
              {activeSection === 'billing' && (
                <BillingSettings 
                  settings={settings?.billing}
                  onSave={handleSave}
                  isLoading={isLoading}
                />
              )}
              {activeSection === 'notifications' && (
                <NotificationSettings 
                  settings={settings?.notifications}
                  onSave={handleSave}
                  isLoading={isLoading}
                />
              )}
              {activeSection === 'team' && (
                <TeamSettings 
                  settings={settings?.team}
                  onSave={handleSave}
                  isLoading={isLoading}
                />
              )}
              {activeSection === 'security' && (
                <SecuritySettings 
                  settings={settings?.security}
                  onSave={handleSave}
                  isLoading={isLoading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}