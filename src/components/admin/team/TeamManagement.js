import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { TeamMemberForm } from './TeamMemberForm';
import { useTeamMembers } from '../../../hooks/useTeamMembers';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { Select } from '../../ui/Select';
export function TeamManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');
    const { teamMembers, isLoading, addTeamMember, updateTeamMember, deleteTeamMember } = useTeamMembers();
    const filteredMembers = teamMembers?.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || member.role === filterRole;
        return matchesSearch && matchesRole;
    });
    const handleSubmit = async (data) => {
        if (selectedMember) {
            await updateTeamMember({ id: selectedMember.id, ...data });
        }
        else {
            await addTeamMember(data);
        }
        setIsModalOpen(false);
        setSelectedMember(null);
    };
    const handleEdit = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to remove this team member?')) {
            await deleteTeamMember(id);
        }
    };
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Team Management" }), _jsx(Button, { variant: "primary", icon: Plus, onClick: () => {
                            setSelectedMember(null);
                            setIsModalOpen(true);
                        }, children: "Add Team Member" })] }), _jsx("div", { className: "bg-white rounded-lg shadow", children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { className: "relative flex-1 max-w-md", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search team members...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" })] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Filter, { className: "h-5 w-5 text-gray-400" }), _jsx(Select, { options: [
                                                { value: 'all', label: 'All Roles' },
                                                { value: 'admin', label: 'Admin' },
                                                { value: 'manager', label: 'Manager' },
                                                { value: 'staff', label: 'Staff' }
                                            ], value: filterRole, onChange: setFilterRole })] })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Member" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Role" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Email" }), _jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: filteredMembers?.map((member) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "h-10 w-10 flex-shrink-0", children: _jsx("img", { className: "h-10 w-10 rounded-full object-cover", src: member.image, alt: member.name }) }), _jsx("div", { className: "ml-4", children: _jsx("div", { className: "text-sm font-medium text-gray-900", children: member.name }) })] }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-900", children: member.role }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "text-sm text-gray-500", children: member.email }) }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Edit2, onClick: () => handleEdit(member), className: "mr-2", children: "Edit" }), _jsx(Button, { variant: "ghost", size: "sm", icon: Trash2, onClick: () => handleDelete(member.id), className: "text-red-600 hover:text-red-700", children: "Delete" })] })] }, member.id))) })] }) })] }) }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => {
                    setIsModalOpen(false);
                    setSelectedMember(null);
                }, title: selectedMember ? 'Edit Team Member' : 'Add Team Member', children: _jsx(TeamMemberForm, { initialData: selectedMember, onSubmit: handleSubmit, onCancel: () => {
                        setIsModalOpen(false);
                        setSelectedMember(null);
                    } }) })] }));
}
