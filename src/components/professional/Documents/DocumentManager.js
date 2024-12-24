<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { FileText, Upload } from 'lucide-react';
import { Button } from '../../ui/Button';
import { DocumentGrid } from './DocumentGrid';
import { DocumentList } from './DocumentList';
import { DocumentUpload } from './DocumentUpload';
import { DocumentFilters } from './DocumentFilters';
import { Modal } from '../../ui/Modal';
import { useDocuments } from '../../../hooks/useDocuments';
export function DocumentManager() {
    const [viewMode, setViewMode] = useState('grid');
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const { documents, isLoading, filters, setFilters, uploadDocument, deleteDocument, shareDocument } = useDocuments();
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Document Management" }), _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Button, { variant: "outline", icon: viewMode === 'grid' ? FileText : FileText, onClick: () => setViewMode(viewMode === 'grid' ? 'list' : 'grid'), children: viewMode === 'grid' ? 'List View' : 'Grid View' }), _jsx(Button, { variant: "primary", icon: Upload, onClick: () => setIsUploadModalOpen(true), children: "Upload Documents" })] })] }), _jsx(DocumentFilters, { filters: filters, onFilterChange: setFilters }), viewMode === 'grid' ? (_jsx(DocumentGrid, { documents: documents, isLoading: isLoading, onDelete: deleteDocument, onShare: shareDocument })) : (_jsx(DocumentList, { documents: documents, isLoading: isLoading, onDelete: deleteDocument, onShare: shareDocument })), _jsx(Modal, { isOpen: isUploadModalOpen, onClose: () => setIsUploadModalOpen(false), title: "Upload Documents", children: _jsx(DocumentUpload, { onUpload: uploadDocument, onClose: () => setIsUploadModalOpen(false) }) })] }));
=======
    return (<div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Document Management</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" icon={viewMode === 'grid' ? FileText : FileText} onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            {viewMode === 'grid' ? 'List View' : 'Grid View'}
          </Button>
          <Button variant="primary" icon={Upload} onClick={() => setIsUploadModalOpen(true)}>
            Upload Documents
          </Button>
        </div>
      </div>

      <DocumentFilters filters={filters} onFilterChange={setFilters}/>

      {viewMode === 'grid' ? (<DocumentGrid documents={documents} isLoading={isLoading} onDelete={deleteDocument} onShare={shareDocument}/>) : (<DocumentList documents={documents} isLoading={isLoading} onDelete={deleteDocument} onShare={shareDocument}/>)}

      <Modal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} title="Upload Documents">
        <DocumentUpload onUpload={uploadDocument} onClose={() => setIsUploadModalOpen(false)}/>
      </Modal>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
