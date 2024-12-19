import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentDashboard } from '../../components/student/StudentDashboard';
import { StudentLayout } from '../../components/student/StudentLayout';
import { LearningResources } from '../../components/student/LearningResources';
import { PracticeExercises } from '../../components/student/PracticeExercises/PracticeExercises';
import { ProgressTracking } from '../../components/student/ProgressTracking/ProgressTracking';

export default function StudentPortal() {
  return (
    <StudentLayout>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/resources" element={<LearningResources />} />
        <Route path="/exercises" element={<PracticeExercises />} />
        <Route path="/progress" element={<ProgressTracking />} />
      </Routes>
    </StudentLayout>
  );
}