import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Star, Quote } from 'lucide-react';
export function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Small Business Owner",
            content: "XTaXAdvisors transformed our financial management. Their expertise in tax planning saved us thousands and their innovative platform makes everything seamless.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Startup Founder",
            content: "The virtual consultations are incredibly convenient, and their professional team provides invaluable insights for our growing business.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Investment Manager",
            content: "Their comprehensive approach to financial advisory services sets them apart. The platform's user experience is exceptional.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200"
        }
    ];
    return (_jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Client Success Stories" }), _jsx("p", { className: "mt-4 text-xl text-gray-600", children: "Hear from our satisfied clients about their experience" })] }), _jsx("div", { className: "mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.map((testimonial) => (_jsxs("div", { className: "relative bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:-translate-y-1", children: [_jsx(Quote, { className: "absolute top-4 right-4 h-8 w-8 text-blue-100" }), _jsxs("div", { className: "flex items-center mb-6", children: [_jsx("img", { src: testimonial.image, alt: testimonial.name, className: "h-12 w-12 rounded-full object-cover" }), _jsxs("div", { className: "ml-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: testimonial.name }), _jsx("p", { className: "text-sm text-gray-500", children: testimonial.role })] })] }), _jsx("div", { className: "flex mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-gray-600 italic", children: ["\"", testimonial.content, "\""] })] }, testimonial.id))) }), _jsx("div", { className: "mt-16 text-center", children: _jsx("div", { className: "inline-flex items-center px-6 py-3 bg-blue-50 rounded-full", children: _jsx("span", { className: "text-blue-600 font-medium", children: "Join our growing community of successful clients" }) }) })] }) }));
}
