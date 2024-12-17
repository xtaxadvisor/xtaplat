import React from 'react';
import { useExercises } from '../../../hooks/useExercises';

export function ExerciseHeader() {
  const { totalPoints } = useExercises();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">Practice Exercises</h1>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500">
          <span className="font-medium">Total Points:</span> {totalPoints}
        </div>
      </div>
    </div>
  );
}