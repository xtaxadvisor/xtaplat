import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Filter, 
  Search, 
  FolderPlus,
  History,
  Share2,
  Tag
} from 'lucide-react';
import { Button } from '../../ui/Button';
import { DocumentGrid } from './DocumentGrid';
import { DocumentList } from './DocumentList';
import { DocumentUpload } from './DocumentUpload';
import { DocumentFilters } from './DocumentFilters';
import { Modal } from '../../ui/Modal';
import { useDocuments } from '../../../hooks/useDocuments';

export function DocumentManager() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const {
    documents,
    isLoading,
    filters,
    setFilters,
    uploadDocument,
    deleteDocument,
    shareDocument
  } = useDocuments();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            icon={viewMode === 'grid' ? FileText : FileText}
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
          >
            {viewMode === 'grid' ? 'List View' : 'Grid View'}
          </Button>
          <Button
            variant="primary"
            icon={Upload}
            onClick={() => setIsUploadModalOpen(true)}
          >
            Upload Documents
          </Button>
        </div>
      </div>

      <DocumentFilters
        filters={filters}
        onFilterChange={setFilters}
      />

      {viewMode === 'grid' ? (
        <DocumentGrid
          documents={documents}
          isLoading={isLoading}
          onDelete={deleteDocument}
          onShare={shareDocument}
        />
      ) : (
        <DocumentList
          documents={documents}
          isLoading={isLoading}
          onDelete={deleteDocument}
          onShare={shareDocument}
        />
      )}

      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Documents"
      >
        <DocumentUpload
          onUpload={uploadDocument}
          onClose={() => setIsUploadModalOpen(false)}
        />
      </Modal>
    </div>
  );
}