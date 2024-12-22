<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Routes, Route } from 'react-router-dom';
import { ForumLayout } from '../../components/forum/ForumLayout';
import { ThreadList } from '../../components/forum/ThreadList';
import { ThreadDetail } from '../../components/forum/ThreadDetail';
import { CreateThread } from '../../components/forum/CreateThread';
export default function ForumPage() {
<<<<<<< HEAD
    return (_jsx(ForumLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ThreadList, {}) }), _jsx(Route, { path: "/thread/:threadId", element: _jsx(ThreadDetail, {}) }), _jsx(Route, { path: "/create", element: _jsx(CreateThread, {}) })] }) }));
=======
    return (<ForumLayout>
      <Routes>
        <Route path="/" element={<ThreadList />}/>
        <Route path="/thread/:threadId" element={<ThreadDetail />}/>
        <Route path="/create" element={<CreateThread />}/>
      </Routes>
    </ForumLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
