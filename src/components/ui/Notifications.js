import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNotificationStore } from '../../lib/store';
import { X } from 'lucide-react';
export function Notifications() {
    const { notifications, removeNotification } = useNotificationStore();
    useEffect(() => {
        notifications.forEach((notification) => {
            const timer = setTimeout(() => {
                removeNotification(notification.id);
            }, 5000);
            return () => clearTimeout(timer);
        });
    }, [notifications, removeNotification]);
    return (_jsx("div", { className: "fixed bottom-4 right-4 z-50 space-y-2", children: notifications.map((notification) => (_jsxs("div", { className: `p-4 rounded-lg shadow-lg flex items-center justify-between ${notification.type === 'success'
                ? 'bg-green-500'
                : notification.type === 'error'
                    ? 'bg-red-500'
                    : 'bg-blue-500'} text-white`, children: [_jsx("span", { children: notification.message }), _jsx("button", { onClick: () => removeNotification(notification.id), className: "ml-4 text-white hover:text-gray-200", children: _jsx(X, { className: "h-4 w-4" }) })] }, notification.id))) }));
}
