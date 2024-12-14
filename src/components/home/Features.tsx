import React from 'react';
import { PortalAccess } from '../navigation/PortalAccess';

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive Service Hub</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage your finances in one place
          </p>
        </div>

        <div className="mt-16">
          <PortalAccess />
        </div>
      </div>
    </section>
  );
}