import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { ConsultationLayout } from '../../components/consultation/ConsultationLayout';
import { useParams } from 'react-router-dom';
import { ConsultationList } from '../../components/consultation/ConsultationList';
import { ConsultationDetail } from '../../components/consultation/ConsultationDetail';
import { BookConsultation } from '../../components/consultation/BookConsultation';
import { VirtualMeeting } from '../../components/consultation/VirtualMeeting';
export default function ConsultationPage() {
    return (_jsx(ConsultationLayout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ConsultationList, {}) }), _jsx(Route, { path: "/book", element: _jsx(BookConsultation, {}) }), _jsx(Route, { path: "/:consultationId", element: _jsx(ConsultationDetail, {}) }), _jsx(Route, { path: "/meeting/:meetingId", element: _jsx(VirtualMeeting, { meetingId: useParams().meetingId, onEnd: () => { } }) })] }) }));
}
