<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Download, FileText, Mail } from 'lucide-react';
import { Button } from '../../ui/Button';
export function ReportExport({ onExport }) {
    return (_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Button, { variant: "outline", size: "sm", icon: FileText, onClick: () => onExport('pdf'), children: "PDF" }), _jsx(Button, { variant: "outline", size: "sm", icon: Download, onClick: () => onExport('csv'), children: "CSV" }), _jsx(Button, { variant: "outline", size: "sm", icon: Mail, onClick: () => onExport('email'), children: "Email" })] }));
=======
import React from 'react';
import { Download, FileText, Mail } from 'lucide-react';
import { Button } from '../../ui/Button';
export function ReportExport({ onExport }) {
    return (<div className="flex items-center space-x-3">
      <Button variant="outline" size="sm" icon={FileText} onClick={() => onExport('pdf')}>
        PDF
      </Button>
      <Button variant="outline" size="sm" icon={Download} onClick={() => onExport('csv')}>
        CSV
      </Button>
      <Button variant="outline" size="sm" icon={Mail} onClick={() => onExport('email')}>
        Email
      </Button>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
