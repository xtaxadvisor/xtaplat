import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConsultationLayout } from '../../components/consultation/ConsultationLayout';
import { ConsultationList } from '../../components/consultation/ConsultationList';
import { ConsultationDetail } from '../../components/consultation/ConsultationDetail';
import { BookConsultation } from '../../components/consultation/BookConsultation';
import { VirtualMeeting } from '../../components/consultation/VirtualMeeting';

export default function ConsultationPage() {
  return (
    <ConsultationLayout>
      <Routes>
        <Route path="/" element={<ConsultationList />} />
        <Route path="/book" element={<BookConsultation />} />
        <Route path="/:consultationId" element={<ConsultationDetail />} />
        <Route path="/meeting/:meetingId" element={<VirtualMeeting />} />
      </Routes>
    </ConsultationLayout>
  );
}