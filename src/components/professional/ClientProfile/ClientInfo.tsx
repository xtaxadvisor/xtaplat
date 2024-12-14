import React from 'react';
import { Mail, Phone, Building2, Calendar, MapPin, Link } from 'lucide-react';
import type { Client } from '../../../types';

interface ClientInfoProps {
  client: Client;
}

export function ClientInfo({ client }: ClientInfoProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-500">
              <Mail className="h-5 w-5 mr-2" />
              <span>{client.email}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="h-5 w-5 mr-2" />
              <span>{client.phone}</span>
            </div>
            {client.company && (
              <div className="flex items-center text-gray-500">
                <Building2 className="h-5 w-5 mr-2" />
                <span>{client.company}</span>
              </div>
            )}
            {client.address && (
              <div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{client.address}</span>
              </div>
            )}
            {client.website && (
              <div className="flex items-center text-gray-500">
                <Link className="h-5 w-5 mr-2" />
                <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  {client.website}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Account Details</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Client since: {new Date(client.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {client.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {client.notes && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Notes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap">{client.notes}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <div className="space-y-4">
          {client.recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}