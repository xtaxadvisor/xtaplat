import { jsx as _jsx } from "react/jsx-runtime";
import { SignInForm } from '../components/auth/SignInForm';
export default function LoginPage() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx(SignInForm, {}) }) }));
}
