import React from 'react';
import { PersonalizedTabs } from './PersonalizedTabs';
import { useAuth } from '../../contexts/AuthContext';

export function DashboardHome() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-8">
      <PersonalizedTabs />
    </div>
  );
}