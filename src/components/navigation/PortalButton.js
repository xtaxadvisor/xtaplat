import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';
export function PortalButton({ type, className = '' }) {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();
    const handleClick = () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: `/${type}` } });
            return;
        }
        if (user?.role !== type) {
            navigate('/unauthorized');
            return;
        }
        navigate(`/${type}`);
    };
    return (_jsx(Button, { variant: "outline", size: "lg", icon: type === 'admin' ? Shield : TrendingUp, onClick: handleClick, className: `px-8 hover-scale bg-white ${className}`, children: type === 'admin' ? 'Admin Portal' : 'Investors Portal' }));
}
