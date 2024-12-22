import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Share2, Flag } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useThread } from '../../hooks/useThread';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { formatTimeAgo } from '../../utils/date';
export function ThreadDetail() {
    const { threadId } = useParams();
    const { thread, replies, isLoading } = useThread(threadId);
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    if (!thread) {
        return _jsx("div", { children: "Thread not found" });
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: thread.title }), _jsx("div", { className: "mt-4 prose max-w-none", children: thread.content }), _jsxs("div", { className: "mt-6 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs(Button, { variant: "outline", icon: ThumbsUp, children: ["Like (", thread.likes, ")"] }), _jsx(Button, { variant: "outline", icon: Share2, children: "Share" }), _jsx(Button, { variant: "outline", icon: Flag, children: "Report" })] }), _jsxs("div", { className: "flex items-center text-sm text-gray-500", children: ["Posted ", formatTimeAgo(thread.createdAt)] })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("h2", { className: "text-lg font-medium text-gray-900", children: ["Replies (", replies?.length || 0, ")"] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx(Input, { label: "Add a reply", multiline: true, rows: 4, placeholder: "What are your thoughts?" }), _jsx("div", { className: "mt-4 flex justify-end", children: _jsx(Button, { variant: "primary", icon: MessageSquare, children: "Post Reply" }) })] }), replies?.map((reply) => (_jsx("div", { className: "bg-white rounded-lg shadow p-6", children: _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("img", { src: reply.author.avatarUrl || 'https://via.placeholder.com/40', alt: reply.author.displayName, className: "h-10 w-10 rounded-full" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-medium text-gray-900", children: reply.author.displayName }), _jsx("span", { className: "text-sm text-gray-500", children: formatTimeAgo(reply.createdAt) })] }), _jsx("div", { className: "mt-2 text-gray-600", children: reply.content }), _jsxs("div", { className: "mt-4 flex items-center space-x-4", children: [_jsx(Button, { variant: "ghost", size: "sm", icon: ThumbsUp, children: reply.likes }), _jsx(Button, { variant: "ghost", size: "sm", icon: MessageSquare, children: "Reply" })] })] })] }) }, reply.id)))] })] }));
}
