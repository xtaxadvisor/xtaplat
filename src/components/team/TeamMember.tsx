import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import type { TeamMember as TeamMemberType } from '../../types/team';

interface TeamMemberProps extends TeamMemberType {
  onEdit?: (member: TeamMemberType) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

export function TeamMember({ 
  id,
  name,
  role,
  description,
  image,
  email,
  linkedin,
  website,
  onEdit,
  onDelete,
  isAdmin
}: TeamMemberProps) {
  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="w-full h-64 object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = FALLBACK_IMAGE;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mt-1">{role}</p>
        <p className="mt-3 text-gray-600 text-sm line-clamp-4">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {email && (
              <Button
                variant="outline"
                size="sm"
                icon={Mail}
                onClick={() => window.location.href = `mailto:${email}`}
                className="hover:text-blue-600"
              />
            )}
            {linkedin && (
              <Button
                variant="outline"
                size="sm"
                icon={Linkedin}
                onClick={() => window.open(linkedin, '_blank')}
                className="hover:text-blue-600"
              />
            )}
            {website && (
              <Button
                variant="outline"
                size="sm"
                icon={ExternalLink}
                onClick={() => window.open(website, '_blank')}
                className="hover:text-blue-600"
              />
            )}
          </div>
          
          {isAdmin && (
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit?.({ id, name, role, description, image, email, linkedin, website })}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700"
                onClick={() => onDelete?.(id)}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}