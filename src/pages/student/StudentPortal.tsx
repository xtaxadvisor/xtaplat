import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StudentDashboard } from '../../components/student/StudentDashboard';
import { StudentLayout } from '../../components/student/StudentLayout';
import { LearningResources } from '../../components/student/LearningResources';
<<<<<<< HEAD
import { PracticeExercises } from '../../components/student/PracticeExercises';
import { ProgressTracking } from '../../components/student/CorrectPathToProgressTracking';
=======
import { PracticeExercises } from '../../components/student/PracticeExercises/PracticeExercises';
import { ProgressTracking } from '../../components/student/ProgressTracking/ProgressTracking';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c

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