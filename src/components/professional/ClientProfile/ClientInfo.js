<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Phone, Building2, Calendar, MapPin, Link } from 'lucide-react';
export function ClientInfo({ client }) {
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Contact Information" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: client.email })] }), _jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: client.phone })] }), client.company && (_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Building2, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: client.company })] })), client.address && (_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(MapPin, { className: "h-5 w-5 mr-2" }), _jsx("span", { children: client.address })] })), client.website && (_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Link, { className: "h-5 w-5 mr-2" }), _jsx("a", { href: client.website, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-700", children: client.website })] }))] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Account Details" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center text-gray-500", children: [_jsx(Calendar, { className: "h-5 w-5 mr-2" }), _jsxs("span", { children: ["Client since: ", new Date(client.createdAt).toLocaleDateString()] })] }), _jsx("div", { className: "flex items-center", children: _jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`, children: client.status }) })] })] })] }), client.notes && (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Notes" }), _jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: _jsx("p", { className: "text-gray-700 whitespace-pre-wrap", children: client.notes }) })] })), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Recent Activity" }), _jsx("div", { className: "space-y-4", children: client.recentActivity?.map((activity, index) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center", children: _jsx(activity.icon, { className: "h-4 w-4 text-blue-600" }) }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-900", children: activity.description }), _jsx("p", { className: "text-sm text-gray-500", children: activity.timestamp })] })] }, index))) })] })] }));
=======
import React from 'react';
import { Mail, Phone, Building2, Calendar, MapPin, Link } from 'lucide-react';
export function ClientInfo({ client }) {
    return (<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-500">
              <Mail className="h-5 w-5 mr-2"/>
              <span>{client.email}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="h-5 w-5 mr-2"/>
              <span>{client.phone}</span>
            </div>
            {client.company && (<div className="flex items-center text-gray-500">
                <Building2 className="h-5 w-5 mr-2"/>
                <span>{client.company}</span>
              </div>)}
            {client.address && (<div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2"/>
                <span>{client.address}</span>
              </div>)}
            {client.website && (<div className="flex items-center text-gray-500">
                <Link className="h-5 w-5 mr-2"/>
                <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  {client.website}
                </a>
              </div>)}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Account Details</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2"/>
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

      {client.notes && (<div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Notes</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 whitespace-pre-wrap">{client.notes}</p>
          </div>
        </div>)}

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        <div className="space-y-4">
          {client.recentActivity?.map((activity, index) => (<div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-blue-600"/>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.timestamp}</p>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
