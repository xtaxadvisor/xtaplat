import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from '../components/dashboard/DashboardHome';
import { Messages } from '../components/dashboard/Messages';
import { Documents } from '../components/dashboard/Documents';
import { Calendar } from '../components/dashboard/Calendar';
import { Settings } from '../components/dashboard/Settings';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ConsultationList } from '../components/consultation/ConsultationList';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/consultations" element={<ConsultationList />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </DashboardLayout>
  );
}