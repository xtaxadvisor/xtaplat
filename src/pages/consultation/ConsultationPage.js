<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Routes, Route } from 'react-router-dom';
import { ConsultationLayout } from '../../components/consultation/ConsultationLayout';
import { ConsultationList } from '../../components/consultation/ConsultationList';
import { ConsultationDetail } from '../../components/consultation/ConsultationDetail';
import { BookConsultation } from '../../components/consultation/BookConsultation';
import { VirtualMeeting } from '../../components/consultation/VirtualMeeting';
export default function ConsultationPage() {
<<<<<<< HEAD
    return (_jsx(ConsultationLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ConsultationList, {}) }), _jsx(Route, { path: "/book", element: _jsx(BookConsultation, {}) }), _jsx(Route, { path: "/:consultationId", element: _jsx(ConsultationDetail, {}) }), _jsx(Route, { path: "/meeting/:meetingId", element: _jsx(VirtualMeeting, {}) })] }) }));
=======
    return (<ConsultationLayout>
      <Routes>
        <Route path="/" element={<ConsultationList />}/>
        <Route path="/book" element={<BookConsultation />}/>
        <Route path="/:consultationId" element={<ConsultationDetail />}/>
        <Route path="/meeting/:meetingId" element={<VirtualMeeting />}/>
      </Routes>
    </ConsultationLayout>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
