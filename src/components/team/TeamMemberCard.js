import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
export function TeamMemberCard({ name, role, description, image, email, linkedin, website, className = '' }) {
    const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80';
    const handleImageError = (e) => {
        const target = e.target;
        if (target.src !== FALLBACK_IMAGE) {
            target.src = FALLBACK_IMAGE;
        }
    };
    return (_jsxs("div", { className: `bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`, children: [_jsxs("div", { className: "aspect-w-1 aspect-h-1 relative", children: [_jsx("img", { src: image, alt: `${name} - ${role}`, className: "w-full h-64 object-cover", onError: handleImageError }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: name }), _jsx("p", { className: "text-blue-600 font-medium mt-1", children: role }), _jsx("p", { className: "mt-3 text-gray-600 text-sm line-clamp-4", children: description }), _jsxs("div", { className: "mt-4 flex items-center space-x-3", children: [email && (_jsx(Button, { variant: "outline", size: "sm", icon: Mail, onClick: () => window.location.href = `mailto:${email}`, className: "hover:text-blue-600" })), linkedin && (_jsx(Button, { variant: "outline", size: "sm", icon: Linkedin, onClick: () => window.open(linkedin, '_blank'), className: "hover:text-blue-600" })), website && (_jsx(Button, { variant: "outline", size: "sm", icon: ExternalLink, onClick: () => window.open(website, '_blank'), className: "hover:text-blue-600" }))] })] })] }));
}
