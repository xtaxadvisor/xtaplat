import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Search, Filter, UserPlus, Mail, Phone, FileText, MoreVertical } from 'lucide-react';
import { Button } from '../ui/Button';
export function ClientList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [clients] = useState([
        {
            id: '1',
            name: 'John Smith',
            email: 'john.smith@example.com',
            phone: '(555) 123-4567',
            status: 'active',
            lastContact: '2024-03-15',
            documents: 12
        },
        {
            id: '2',
            name: 'Sarah Johnson',
            email: 'sarah.j@example.com',
            phone: '(555) 234-5678',
            status: 'active',
            lastContact: '2024-03-14',
            documents: 8
        },
        {
            id: '3',
            name: 'Michael Brown',
            email: 'michael.b@example.com',
            phone: '(555) 345-6789',
            status: 'inactive',
            lastContact: '2024-02-28',
            documents: 5
        }
    ]);
    const filteredClients = clients.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()));
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Clients" }), _jsx(Button, { variant: "primary", icon: UserPlus, children: "Add New Client" })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search clients...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsxs("select", { className: "border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500", children: [_jsx("option", { children: "All Status" }), _jsx("option", { children: "Active" }), _jsx("option", { children: "Inactive" })] })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Client" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Contact" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Last Contact" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Documents" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredClients.map((client) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx("span", { className: "text-blue-600 font-medium", children: client.name.split(' ').map(n => n[0]).join('') }) }), _jsx("div", { className: "ml-4", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: client.name }) })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "text-sm text-gray-500", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "h-4 w-4 mr-1" }), client.email] }), _jsxs("div", { className: "flex items-center mt-1", children: [_jsx(Phone, { className: "h-4 w-4 mr-1" }), client.phone] })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`, children: client.status }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: client.lastContact }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [_jsx(FileText, { className: "h-4 w-4 mr-1" }), client.documents] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: _jsx("button", { className: "text-gray-400 hover:text-gray-500", children: _jsx(MoreVertical, { className: "h-5 w-5" }) }) })] }, client.id))) })] }) })] }) })] }));
}
