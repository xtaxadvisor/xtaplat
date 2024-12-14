import React from 'react';
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
    return <LoadingSpinner />;
  }

  if (!thread) {
    return <div>Thread not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">{thread.title}</h1>
        
        <div className="mt-4 prose max-w-none">
          {thread.content}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" icon={ThumbsUp}>
              Like ({thread.likes})
            </Button>
            <Button variant="outline" icon={Share2}>
              Share
            </Button>
            <Button variant="outline" icon={Flag}>
              Report
            </Button>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            Posted {formatTimeAgo(thread.createdAt)}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">
          Replies ({replies?.length || 0})
        </h2>

        <div className="bg-white rounded-lg shadow p-6">
          <Input
            label="Add a reply"
            multiline
            rows={4}
            placeholder="What are your thoughts?"
          />
          <div className="mt-4 flex justify-end">
            <Button variant="primary" icon={MessageSquare}>
              Post Reply
            </Button>
          </div>
        </div>

        {replies?.map((reply) => (
          <div key={reply.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start space-x-3">
              <img
                src={reply.author.avatarUrl || 'https://via.placeholder.com/40'}
                alt={reply.author.displayName}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    {reply.author.displayName}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatTimeAgo(reply.createdAt)}
                  </span>
                </div>
                <div className="mt-2 text-gray-600">
                  {reply.content}
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <Button variant="ghost" size="sm" icon={ThumbsUp}>
                    {reply.likes}
                  </Button>
                  <Button variant="ghost" size="sm" icon={MessageSquare}>
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}