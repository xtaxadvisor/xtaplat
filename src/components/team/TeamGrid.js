<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { TeamMemberCard } from './TeamMemberCard';
import { teamMembers } from '../../data/teamData';
import { useMediaQuery } from '../../utils/hooks';
export function TeamGrid() {
    const isMobile = useMediaQuery('(max-width: 640px)');
    const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
<<<<<<< HEAD
    return (_jsx("div", { className: `grid gap-8 ${isMobile ? 'grid-cols-1' :
            isTablet ? 'grid-cols-2' :
                'grid-cols-3'}`, children: teamMembers.map((member) => (_jsx(TeamMemberCard, { ...member }, member.id))) }));
=======
    return (<div className={`grid gap-8 ${isMobile ? 'grid-cols-1' :
            isTablet ? 'grid-cols-2' :
                'grid-cols-3'}`}>
      {teamMembers.map((member) => (<TeamMemberCard key={member.id} {...member}/>))}
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
