import React from 'react';
import { ExerciseHeader } from './ExerciseHeader';
import { ExerciseList } from './ExerciseList';

export function PracticeExercises() {
  return (
    <div className="space-y-6">
      <ExerciseHeader />
      <ExerciseList />
    </div>
  );
}