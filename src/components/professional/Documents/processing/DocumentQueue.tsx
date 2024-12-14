import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { formatTimeAgo } from '../../../../utils/date';
import type { QueuedDocument } from '../../../../types/documents';

interface DocumentQueueProps {
  documents: QueuedDocument[];
  onProcessDocument: (id: string) => void;
}

export function DocumentQueue({ documents, onProcessDocument }: DocumentQueueProps) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${
              doc.status === 'pending' ? 'bg-yellow-100' :
              doc.status === 'processing' ? 'bg-blue-100' :
              doc.status === 'completed' ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {doc.status === 'pending' ? <Clock className="h-5 w-5 text-yellow-600" /> :
               doc.status === 'processing' ? <Clock className="h-5 w-5 text-blue-600" /> :
               doc.status === 'completed' ? <CheckCircle className="h-5 w-5 text-green-600" /> :
               <AlertCircle className="h-5 w-5 text-red-600" />}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{doc.name}</h4>
              <p className="text-sm text-gray-500">Added {formatTimeAgo(doc.queuedAt)}</p>
            </div>
          </div>
          {doc.status === 'pending' && (
            <button
              onClick={() => onProcessDocument(doc.id)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Process Now
            </button>
          )}
        </div>
      ))}
    </div>
  );
}