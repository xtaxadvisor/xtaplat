import React from 'react';
import { Server, Database, Cloud, Globe } from 'lucide-react';

export function SystemStatus() {
  const services = [
    {
      name: 'API Server',
      status: 'Operational',
      uptime: '99.9%',
      icon: Server,
      health: 'good'
    },
    {
      name: 'Database',
      status: 'Operational',
      uptime: '99.8%',
      icon: Database,
      health: 'good'
    },
    {
      name: 'Storage',
      status: 'Operational',
      uptime: '99.9%',
      icon: Cloud,
      health: 'good'
    },
    {
      name: 'CDN',
      status: 'Operational',
      uptime: '99.9%',
      icon: Globe,
      health: 'good'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.name} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <service.icon className="h-6 w-6 text-gray-400" />
              <div>
                <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                <div className="flex items-center mt-1">
                  <div className={`h-2 w-2 rounded-full ${
                    service.health === 'good' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <span className="ml-2 text-sm text-gray-500">{service.status}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Uptime: {service.uptime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}