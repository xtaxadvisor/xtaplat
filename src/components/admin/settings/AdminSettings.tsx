import React, { useState } from 'react';
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Admin Settings</h1>
        <Button
          variant="primary"
          icon={Save}
          disabled={isLoading}
        >
          Save Changes
        </Button>
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
              {activeSection === 'general' && (
                <div className="space-y-6">
                  <Input
                    label="Site Name"
                    defaultValue={settings?.general?.siteName}
                  />
                  <Input
                    label="Support Email"
                    type="email"
                    defaultValue={settings?.general?.supportEmail}
                  />
                  <Select
                    label="Default Language"
                    options={[
                      { value: 'en', label: 'English' },
                      { value: 'es', label: 'Spanish' },
                      { value: 'fr', label: 'French' }
                    ]}
                    value={settings?.general?.defaultLanguage}
                  />
                </div>
              )}

              {activeSection === 'security' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
                    </div>
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked={settings?.security?.require2FA}
                    />
                  </div>
                  <Input
                    label="Session Timeout (minutes)"
                    type="number"
                    defaultValue={settings?.security?.sessionTimeout}
                  />
                </div>
              )}

              {activeSection === 'notifications' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {['userRegistration', 'systemAlerts', 'securityAlerts'].map((setting) => (
                      <div key={setting} className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </h3>
                        </div>
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked={settings?.notifications?.[setting]}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'database' && (
                <div className="space-y-6">
                  <Input
                    label="Backup Schedule"
                    defaultValue={settings?.database?.backupSchedule}
                  />
                  <Input
                    label="Retention Period (days)"
                    type="number"
                    defaultValue={settings?.database?.retentionPeriod}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}