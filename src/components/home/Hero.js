<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
=======
import React from 'react';
import { Video } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
import { AIAssistantWidget } from '../ai/AIAssistantWidget';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
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
<<<<<<< HEAD
    return (_jsx("div", { className: "relative bg-gradient-to-b from-blue-50 to-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28", children: _jsxs("div", { className: "text-center animate-slideUp", children: [_jsxs("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight", children: ["Financial Excellence", _jsx("br", {}), _jsx("span", { className: "text-gradient", children: "Made Simple" })] }), _jsx("p", { className: "mt-6 max-w-2xl mx-auto text-xl text-gray-500 animate-fadeIn", style: { animationDelay: '0.2s' }, children: "Expert tax and financial advisory services tailored to your needs. Join thousands of satisfied clients in achieving their financial goals." }), _jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4 animate-fadeIn", style: { animationDelay: '0.4s' }, children: [_jsx(Button, { onClick: handleConsultation, variant: "primary", size: "lg", icon: Video, className: "px-8 hover-scale", children: "Video Consultation" }), !isAuthenticated && (_jsx(Button, { onClick: handleCreateAccount, variant: "primary", size: "lg", className: "px-8 hover-scale", children: "Create Free Account" }))] })] }) }) }));
=======
    return (<div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
        <div className="text-center animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Financial Excellence<br />
            <span className="text-gradient">Made Simple</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Expert tax and financial advisory services tailored to your needs.
            Join thousands of satisfied clients in achieving their financial goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Button onClick={handleConsultation} variant="primary" size="lg" icon={Video} className="px-8 hover-scale">
              Video Consultation
            </Button>
            
            {!isAuthenticated && (<Button onClick={handleCreateAccount} variant="primary" size="lg" className="px-8 hover-scale">
                Create Free Account
              </Button>)}
          </div>
        </div>
    <AIAssistantWidget />
  </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
