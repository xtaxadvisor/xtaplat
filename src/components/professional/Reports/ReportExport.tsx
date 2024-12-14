import React from 'react';
import { Download, FileText, Mail } from 'lucide-react';
import { Button } from '../../ui/Button';

interface ReportExportProps {
  onExport: (format: 'pdf' | 'csv' | 'email') => void;
}

export function ReportExport({ onExport }: ReportExportProps) {
  return (
    <div className="flex items-center space-x-3">
      <Button
        variant="outline"
        size="sm"
        icon={FileText}
        onClick={() => onExport('pdf')}
      >
        PDF
      </Button>
      <Button
        variant="outline"
        size="sm"
        icon={Download}
        onClick={() => onExport('csv')}
      >
        CSV
      </Button>
      <Button
        variant="outline"
        size="sm"
        icon={Mail}
        onClick={() => onExport('email')}
      >
        Email
      </Button>
    </div>
  );
}