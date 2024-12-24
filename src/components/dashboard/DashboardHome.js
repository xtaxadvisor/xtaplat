<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { PersonalizedTabs } from './PersonalizedTabs';
import { useAuth } from '../../contexts/AuthContext';
export function DashboardHome() {
    const { user } = useAuth();
    if (!user)
        return null;
<<<<<<< HEAD
    return (_jsx("div", { className: "space-y-8", children: _jsx(PersonalizedTabs, {}) }));
=======
    return (<div className="space-y-8">
      <PersonalizedTabs />
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
