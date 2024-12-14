import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

interface FormField {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitText?: string;
  className?: string;
}

export function Form({ fields, onSubmit, submitText = 'Submit', className = '' }: FormProps) {
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {fields.map(field => (
        <Input
          key={field.name}
          type={field.type || 'text'}
          label={field.label}
          placeholder={field.placeholder}
          value={formData[field.name] || ''}
          onChange={e => handleChange(field.name, e.target.value)}
          error={errors[field.name]}
          required={field.required}
        />
      ))}
      <Button type="submit" variant="primary" className="w-full">
        {submitText}
      </Button>
    </form>
  );
}