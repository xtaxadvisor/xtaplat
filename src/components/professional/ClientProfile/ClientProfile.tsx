import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Calendar,
  FileText,
  MessageSquare,
  Clock,
  Edit,
  Trash2
} from 'lucide-react';
import { Button } from '../../ui/Button';
import { ClientInfo } from './ClientInfo';
import { ClientDocuments } from './ClientDocuments';
import { ClientCommunication } from './ClientCommunication';
import { ClientHistory } from './ClientHistory';
import { Modal } from '../../ui/Modal';
import { ClientForm } from './ClientForm';
import { useClient } from '../../../hooks/useClient';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

interface ClientProfileProps {
  clientId: string;
}

export function ClientProfile({ clientId }: ClientProfileProps) {
  const [activeTab, setActiveTab] = useState('info');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { client, isLoading, updateClient, deleteClient } = useClient(clientId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!client) {
    return <div>Client not found</div>;
  }

  const handleUpdateClient = async (data: any) => {
    await updateClient({ id: clientId, ...data });
    setIsEditModalOpen(false);
  };

  const tabs = [
    { id: 'info', label: 'Overview', icon: User },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'history', label: 'History', icon: Clock }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{client.name}</h1>
          <p className="text-gray-500">{client.company}</p>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            icon={Edit}
            onClick={() => setIsEditModalOpen(true)}
          >
            Edit Profile
          </Button>
          <Button
            variant="outline"
            icon={Trash2}
            className="text-red-600 hover:text-red-700"
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this client?')) {
                deleteClient(clientId);
              }
            }}
          >
            Delete Client
          </Button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center px-6 py-4 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  <Icon className={`-ml-1 mr-2 h-5 w-5 ${
                    activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'info' && <ClientInfo client={client} />}
          {activeTab === 'documents' && <ClientDocuments clientId={clientId} />}
          {activeTab === 'communication' && <ClientCommunication clientId={clientId} />}
          {activeTab === 'history' && <ClientHistory clientId={clientId} />}
        </div>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Client Profile"
      >
        <ClientForm
          initialData={client}
          onSubmit={handleUpdateClient}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
}