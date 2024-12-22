<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MessagingCenter } from '../messaging/MessagingCenter';
export function Messages() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Messages" }) }), _jsx(MessagingCenter, {})] }));
=======
import React from 'react';
import { MessagingCenter } from '../messaging/MessagingCenter';
export function Messages() {
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
      </div>
      <MessagingCenter />
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
