import { jsx as _jsx } from "react/jsx-runtime";
import { PersonalizedTabs } from './PersonalizedTabs';
import { useAuth } from '../../contexts/AuthContext';
export function DashboardHome() {
    const { user } = useAuth();
    if (!user)
        return null;
    return (_jsx("div", { className: "space-y-8", children: _jsx(PersonalizedTabs, {}) }));
}
