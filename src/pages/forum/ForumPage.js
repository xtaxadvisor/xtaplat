import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { ForumLayout } from '../../components/forum/ForumLayout';
import { ThreadList } from '../../components/forum/ThreadList';
import { ThreadDetail } from '../../components/forum/ThreadDetail';
import { CreateThread } from '../../components/forum/CreateThread';
export default function ForumPage() {
    return (_jsx(ForumLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ThreadList, {}) }), _jsx(Route, { path: "/thread/:threadId", element: _jsx(ThreadDetail, {}) }), _jsx(Route, { path: "/create", element: _jsx(CreateThread, {}) })] }) }));
}
