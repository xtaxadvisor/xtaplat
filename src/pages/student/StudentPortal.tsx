import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentDashboard } from '../../components/student/StudentDashboard';
import { StudentLayout } from '../../components/student/StudentLayout';
import { LearningResources } from '../../components/student/LearningResources';
<<<<<<< HEAD
import { PracticeExercises } from '../../components/student/PracticeExercises';
import { ProgressTracking } from '../../components/student/ProgressTracking';
=======
import { PracticeExercises } from '../../components/student/PracticeExercises/PracticeExercises';
import { ProgressTracking } from '../../components/student/ProgressTracking/ProgressTracking';
>>>>>>> b597b98 (Update project files and sync with GitHub)

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