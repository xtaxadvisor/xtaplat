import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Clock, Tag } from 'lucide-react';
import type { Thread } from '../../types/discussion';
import { formatTimeAgo, formatDateTime } from '../../utils/date';
import { Button } from '../ui/Button';

interface ThreadListProps {
  threads: Thread[];
  isLoading?: boolean;
}

export function ThreadList({ threads, isLoading }: ThreadListProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer"
                onClick={() => navigate(`/thread/${thread.id}`)}
              >
                {thread.title}
              </h3>
              <div className="mt-2 text-gray-600 line-clamp-2">
                {thread.content}
              </div>
            </div>
            {thread.isPinned && (
              <div className="ml-4">
                <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  Pinned
                </span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span title={formatDateTime(thread.createdAt)}>
                {formatTimeAgo(thread.createdAt)}
              </span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              {thread.replies} replies
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              {thread.likes}
            </div>
            <div className="flex items-center space-x-2">
              {thread.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <img
              src={thread.author.avatarUrl || 'https://via.placeholder.com/40'}
              alt={thread.author.displayName}
              className="h-6 w-6 rounded-full"
            />
            <span className="ml-2 text-sm text-gray-600">
              {thread.author.displayName}
            </span>
            {thread.author.location && (
              <span className="ml-2 text-sm text-gray-500">
                • {thread.author.location}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}