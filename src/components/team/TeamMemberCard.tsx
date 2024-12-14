import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import type { TeamMember } from '../../types/team';

interface TeamMemberCardProps extends TeamMember {
  className?: string;
}

export function TeamMemberCard({
  name,
  role,
  description,
  image,
  email,
  linkedin,
  website,
  className = ''
}: TeamMemberCardProps) {
  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== FALLBACK_IMAGE) {
      target.src = FALLBACK_IMAGE;
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}>
      <div className="aspect-w-1 aspect-h-1 relative">
        <img
          src={image}
          alt={`${name} - ${role}`}
          className="w-full h-64 object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mt-1">{role}</p>
        <p className="mt-3 text-gray-600 text-sm line-clamp-4">{description}</p>
        
        <div className="mt-4 flex items-center space-x-3">
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
      </div>
    </div>
  );
}