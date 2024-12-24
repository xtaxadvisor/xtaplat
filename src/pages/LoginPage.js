<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
import { SignInForm } from '../components/auth/SignInForm';
export default function LoginPage() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx(SignInForm, {}) }) }));
=======
import React from 'react';
import { SignInForm } from '../components/auth/SignInForm';
export default function LoginPage() {
    return (<div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignInForm />
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
