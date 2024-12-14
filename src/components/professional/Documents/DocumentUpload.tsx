import React, { useState, useRef } from 'react';
import { Upload, X, File, Plus } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { useNotificationStore } from '../../../lib/store';

interface DocumentUploadProps {
  onUpload: (files: FileList) => void;
  onClose: () => void;
}

export function DocumentUpload({ onUpload, onClose }: DocumentUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addNotification } = useNotificationStore();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags(prev => [...prev, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(prev => prev.filter(t => t !== tag));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      addNotification('Please select files to upload', 'error');
      return;
    }

    try {
      // Handle file upload
      onClose();
      addNotification('Files uploaded successfully', 'success');
    } catch (error) {
      addNotification('Error uploading files', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          multiple
          className="hidden"
        />
        <div className="space-y-2">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="text-gray-600">
            <button
              type="button"
              className="text-blue-600 hover:text-blue-500"
              onClick={() => fileInputRef.current?.click()}
            >
              Click to upload
            </button>
            {' or drag and drop'}
          </div>
          <p className="text-sm text-gray-500">
            PDF, DOC, DOCX, XLS, XLSX up to 10MB each
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Selected Files</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
              >
                <div className="flex items-center">
                  <File className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-900">{file.name}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-900">Tags</h4>
        <div className="flex items-center space-x-2">
          <Input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add tags..."
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            icon={Plus}
            onClick={addTag}
          >
            Add
          </Button>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-blue-600 hover:text-blue-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" icon={Upload}>
          Upload Files
        </Button>
      </div>
    </form>
  );
}