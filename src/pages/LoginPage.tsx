import React from 'react';
import { SignInForm } from '../components/auth/SignInForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignInForm />
      </div>
    </div>
  );
}