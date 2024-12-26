import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MessageItem } from './MessageItem';
import { useMessages } from '../../hooks/useMessages';
import { LoadingSpinner } from '../ui/LoadingSpinner';
export function MessageList() {
    const { messages, isLoading } = useMessages();
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsxs("div", { className: "space-y-4", children: [messages?.map((message) => (_jsx(MessageItem, { message: message }, message.id))), messages?.length === 0 && (_jsx("div", { className: "text-center text-gray-500 py-8", children: "No messages yet" }))] }));
}
