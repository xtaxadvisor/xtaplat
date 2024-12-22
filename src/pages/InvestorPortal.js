<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Routes, Route } from 'react-router-dom';
import { InvestorDashboard } from '../components/investor/InvestorDashboard';
import { VideoLibrary } from '../components/investor/VideoLibrary';
import { InvestorLayout } from '../components/investor/InvestorLayout';
import InvestorForum from './investor/InvestorForum';
export default function InvestorPortal() {
<<<<<<< HEAD
    return (_jsx(InvestorLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(InvestorDashboard, {}) }), _jsx(Route, { path: "/videos", element: _jsx(VideoLibrary, {}) }), _jsx(Route, { path: "/forum", element: _jsx(InvestorForum, {}) })] }) }));
=======
    return (<InvestorLayout>
      <Routes>
        <Route path="/" element={<InvestorDashboard />}/>
        <Route path="/videos" element={<VideoLibrary />}/>
        <Route path="/forum" element={<InvestorForum />}/>
      </Routes>
    </InvestorLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
