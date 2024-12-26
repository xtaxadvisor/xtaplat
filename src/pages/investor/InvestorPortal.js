import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { InvestorDashboard } from '../../components/investor/InvestorDashboard';
import { VideoLibrary } from '../../components/investor/VideoLibrary';
import { InvestorLayout } from '../../components/investor/InvestorLayout';
import InvestorForum from './InvestorForum';
export default function InvestorPortal() {
    return (_jsx(InvestorLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(InvestorDashboard, {}) }), _jsx(Route, { path: "/videos", element: _jsx(VideoLibrary, {}) }), _jsx(Route, { path: "/forum", element: _jsx(InvestorForum, {}) })] }) }));
}
