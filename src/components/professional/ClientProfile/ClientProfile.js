import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { User, FileText, MessageSquare, Clock, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../ui/Button';
import { ClientInfo } from './ClientInfo';
import { ClientDocuments } from './ClientDocuments';
import { ClientCommunication } from './ClientCommunication';
import { ClientHistory } from './ClientHistory';
import { Modal } from '../../ui/Modal';
import { ClientForm } from './ClientForm';
import { useClient } from '../../../hooks/useClient';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function ClientProfile({ clientId }) {
    const [activeTab, setActiveTab] = useState('info');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const { client, isLoading, updateClient, deleteClient } = useClient(clientId);
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!client) {
        return _jsx("div", { children: "Client not found" });
    }
    const handleUpdateClient = async (data) => {
        await updateClient({ id: clientId, ...data });
        setIsEditModalOpen(false);
    };
    const tabs = [
        { id: 'info', label: 'Overview', icon: User },
        { id: 'documents', label: 'Documents', icon: FileText },
        { id: 'communication', label: 'Communication', icon: MessageSquare },
        { id: 'history', label: 'History', icon: Clock }
    ];
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: client.name }), _jsx("p", { className: "text-gray-500", children: client.company })] }), _jsxs("div", { className: "flex space-x-3", children: [_jsx(Button, { variant: "outline", icon: Edit, onClick: () => setIsEditModalOpen(true), children: "Edit Profile" }), _jsx(Button, { variant: "outline", icon: Trash2, className: "text-red-600 hover:text-red-700", onClick: () => {
                                    if (window.confirm('Are you sure you want to delete this client?')) {
                                        deleteClient(clientId);
                                    }
                                }, children: "Delete Client" })] })] }), _jsxs("div", { className: "bg-white shadow rounded-lg", children: [_jsx("div", { className: "border-b border-gray-200", children: _jsx("nav", { className: "flex -mb-px", children: tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (_jsxs("button", { onClick: () => setActiveTab(tab.id), className: `group inline-flex items-center px-6 py-4 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`, children: [_jsx(Icon, { className: `-ml-1 mr-2 h-5 w-5 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}` }), tab.label] }, tab.id));
                            }) }) }), _jsxs("div", { className: "p-6", children: [activeTab === 'info' && _jsx(ClientInfo, { client: client }), activeTab === 'documents' && _jsx(ClientDocuments, { clientId: clientId }), activeTab === 'communication' && _jsx(ClientCommunication, { clientId: clientId }), activeTab === 'history' && _jsx(ClientHistory, { clientId: clientId })] })] }), _jsx(Modal, { isOpen: isEditModalOpen, onClose: () => setIsEditModalOpen(false), title: "Edit Client Profile", children: _jsx(ClientForm, { initialData: client, onSubmit: handleUpdateClient, onCancel: () => setIsEditModalOpen(false) }) })] }));
}
