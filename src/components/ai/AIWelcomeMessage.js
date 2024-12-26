import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Bot, Shield, Clock, MessageSquare, Sparkles } from 'lucide-react';
export function AIWelcomeMessage() {
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "inline-flex p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl", children: _jsx(Bot, { className: "h-8 w-8 text-white" }) }), _jsx("h3", { className: "mt-4 text-xl font-semibold text-gray-900", children: "Welcome to XTaXAdvisors AI Assistant" }), _jsx("p", { className: "mt-2 text-gray-600", children: "I'm here to provide instant, expert assistance with your tax and financial questions." })] }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    {
                        icon: Shield,
                        title: 'Expert Knowledge',
                        description: 'Access to professional tax & financial expertise'
                    },
                    {
                        icon: Clock,
                        title: '24/7 Available',
                        description: 'Get answers anytime, anywhere'
                    },
                    {
                        icon: MessageSquare,
                        title: 'Easy Communication',
                        description: 'Simple, clear explanations'
                    },
                    {
                        icon: Sparkles,
                        title: 'Smart Assistance',
                        description: 'Personalized help & recommendations'
                    }
                ].map((feature, index) => (_jsxs("div", { className: "p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [_jsx(feature.icon, { className: "h-6 w-6 text-blue-600 mb-2" }), _jsx("h4", { className: "text-sm font-medium text-gray-900", children: feature.title }), _jsx("p", { className: "text-xs text-gray-600 mt-1", children: feature.description })] }, index))) }), _jsx("div", { className: "text-center text-sm text-gray-600", children: "Start by asking a question or choose from the suggestions below" })] }));
}
