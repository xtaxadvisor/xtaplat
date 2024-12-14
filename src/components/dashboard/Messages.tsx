import React from 'react';
import { MessagingCenter } from '../messaging/MessagingCenter';

export function Messages() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
      </div>
      <MessagingCenter />
    </div>
  );
}