import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { InvestorDashboard } from '../components/investor/InvestorDashboard';
import { VideoLibrary } from '../components/investor/VideoLibrary';
import { InvestorLayout } from '../components/investor/InvestorLayout';
import InvestorForum from './investor/InvestorForum';

export default function InvestorPortal() {
  return (
    <InvestorLayout>
      <Routes>
        <Route path="/" element={<InvestorDashboard />} />
        <Route path="/videos" element={<VideoLibrary />} />
        <Route path="/forum" element={<InvestorForum />} />
      </Routes>
    </InvestorLayout>
  );
}