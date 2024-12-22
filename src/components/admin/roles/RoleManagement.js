<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Shield, Edit2, Trash2, Plus } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { RoleForm } from './RoleForm';
import { useRoles } from '../../../hooks/useRoles';
export function RoleManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const { roles, createRole, updateRole, deleteRole, isLoading } = useRoles();
    const handleSubmit = async (data) => {
        if (selectedRole) {
            await updateRole({ id: selectedRole.id, ...data });
        }
        else {
            await createRole(data);
        }
        setIsModalOpen(false);
        setSelectedRole(null);
    };
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Role Management" }), _jsx(Button, { variant: "primary", icon: Plus, onClick: () => setIsModalOpen(true), children: "Create Role" })] }), _jsx("div", { className: "bg-white shadow rounded-lg", children: _jsx("div", { className: "p-6", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Role Name" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Permissions" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Users" }), _jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: roles?.map((role) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsxs("div", { className: "flex items-center", children: [_jsx(Shield, { className: "h-5 w-5 text-gray-400 mr-2" }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: role.name })] }) }), _jsx("td", { className: "px-6 py-4", children: _jsx("div", { className: "flex flex-wrap gap-2", children: role.permissions.map((permission) => (_jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: permission }, permission))) }) }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [role.userCount, " users"] }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: Edit2, onClick: () => {
                                                            setSelectedRole(role);
                                                            setIsModalOpen(true);
                                                        }, className: "mr-2", children: "Edit" }), _jsx(Button, { variant: "ghost", size: "sm", icon: Trash2, onClick: () => deleteRole(role.id), className: "text-red-600 hover:text-red-700", children: "Delete" })] })] }, role.id))) })] }) }) }) }), _jsx(Modal, { isOpen: isModalOpen, onClose: () => {
                    setIsModalOpen(false);
                    setSelectedRole(null);
                }, title: selectedRole ? 'Edit Role' : 'Create Role', children: _jsx(RoleForm, { initialData: selectedRole, onSubmit: handleSubmit, onCancel: () => {
                        setIsModalOpen(false);
                        setSelectedRole(null);
                    } }) })] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Role Management</h2>
        <Button variant="primary" icon={Plus} onClick={() => setIsModalOpen(true)}>
          Create Role
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Permissions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {roles?.map((role) => (<tr key={role.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-gray-400 mr-2"/>
                        <span className="text-sm font-medium text-gray-900">
                          {role.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {role.permissions.map((permission) => (<span key={permission} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {permission}
                          </span>))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {role.userCount} users
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="sm" icon={Edit2} onClick={() => {
                setSelectedRole(role);
                setIsModalOpen(true);
            }} className="mr-2">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" icon={Trash2} onClick={() => deleteRole(role.id)} className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => {
            setIsModalOpen(false);
            setSelectedRole(null);
        }} title={selectedRole ? 'Edit Role' : 'Create Role'}>
        <RoleForm initialData={selectedRole} onSubmit={handleSubmit} onCancel={() => {
            setIsModalOpen(false);
            setSelectedRole(null);
        }}/>
      </Modal>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
