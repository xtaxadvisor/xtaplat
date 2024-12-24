<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Clock, Tag } from 'lucide-react';
import { useThreads } from '../../hooks/useThreads';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { formatTimeAgo } from '../../utils/date';
export function ThreadList() {
    const navigate = useNavigate();
    const { threads, isLoading } = useThreads();
    if (isLoading) {
<<<<<<< HEAD
        return _jsx(LoadingSpinner, {});
    }
    return (_jsx("div", { className: "space-y-4", children: threads?.map((thread) => (_jsxs("div", { className: "bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer", onClick: () => navigate(`/forum/thread/${thread.id}`), children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 hover:text-blue-600", children: thread.title }), _jsx("p", { className: "mt-2 text-gray-600 line-clamp-2", children: thread.content })] }), thread.isPinned && (_jsx("span", { className: "px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full", children: "Pinned" }))] }), _jsxs("div", { className: "mt-4 flex items-center text-sm text-gray-500 space-x-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), formatTimeAgo(thread.createdAt)] }), _jsxs("div", { className: "flex items-center", children: [_jsx(MessageSquare, { className: "h-4 w-4 mr-1" }), thread.replies, " replies"] }), _jsxs("div", { className: "flex items-center", children: [_jsx(ThumbsUp, { className: "h-4 w-4 mr-1" }), thread.likes] }), _jsx("div", { className: "flex items-center space-x-2", children: thread.tags.map((tag) => (_jsxs("span", { className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800", children: [_jsx(Tag, { className: "h-3 w-3 mr-1" }), tag] }, tag))) })] }), _jsxs("div", { className: "mt-4 flex items-center", children: [_jsx("img", { src: thread.author.avatarUrl || 'https://via.placeholder.com/40', alt: thread.author.displayName, className: "h-6 w-6 rounded-full" }), _jsx("span", { className: "ml-2 text-sm text-gray-600", children: thread.author.displayName }), thread.author.location && (_jsxs("span", { className: "ml-2 text-sm text-gray-500", children: ["\u2022 ", thread.author.location] }))] })] }, thread.id))) }));
=======
        return <LoadingSpinner />;
    }
    return (<div className="space-y-4">
      {threads?.map((thread) => (<div key={thread.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer" onClick={() => navigate(`/forum/thread/${thread.id}`)}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {thread.title}
              </h3>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {thread.content}
              </p>
            </div>
            {thread.isPinned && (<span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                Pinned
              </span>)}
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1"/>
              {formatTimeAgo(thread.createdAt)}
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1"/>
              {thread.replies} replies
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1"/>
              {thread.likes}
            </div>
            <div className="flex items-center space-x-2">
              {thread.tags.map((tag) => (<span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  <Tag className="h-3 w-3 mr-1"/>
                  {tag}
                </span>))}
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <img src={thread.author.avatarUrl || 'https://via.placeholder.com/40'} alt={thread.author.displayName} className="h-6 w-6 rounded-full"/>
            <span className="ml-2 text-sm text-gray-600">
              {thread.author.displayName}
            </span>
            {thread.author.location && (<span className="ml-2 text-sm text-gray-500">
                • {thread.author.location}
              </span>)}
          </div>
        </div>))}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
