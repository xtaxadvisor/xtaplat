import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';
export function Hero() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const handleConsultation = () => {
        if (isAuthenticated) {
            navigate('/consultation');
        }
        else {
            navigate('/login', { state: { from: '/consultation' } });
        }
    };
    const handleCreateAccount = () => {
        navigate('/register');
    };
    return (_jsx("div", { className: "relative bg-gradient-to-b from-blue-50 to-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28", children: [_jsxs("div", { className: "text-center animate-slideUp", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight", children: ["Financial Excellence", _jsx("br", {}), _jsx("span", { className: "text-gradient", children: "Made Simple" })] }), _jsx("p", { className: "mt-6 max-w-2xl mx-auto text-xl text-gray-500 animate-fadeIn delay-200", children: "Expert tax and financial advisory services tailored to your needs. Join thousands of satisfied clients in achieving their financial goals." }), _jsxs("div", { className: `mt-10 flex flex-wrap justify-center gap-4 animate-fadeIn ${styles.delayedFadeIn}`, children: [_jsx(Button, { onClick: handleConsultation, variant: "primary", size: "lg", icon: Video, className: "px-8 hover-scale", children: "Video Consultation" }), !isAuthenticated && (_jsx(Button, { onClick: handleCreateAccount, variant: "primary", size: "lg", className: "px-8 hover-scale", children: "Create Free Account" }))] })] }), _jsx(AIAssistantWidget, {})] }) }));
}
