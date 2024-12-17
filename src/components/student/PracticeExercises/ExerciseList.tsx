import React from 'react';
import { ExerciseCard } from './ExerciseCard';
import { useExercises } from '../../../hooks/useExercises';
import { LoadingSpinner } from '../../ui/LoadingSpinner';

export function ExerciseList() {
  const { exercises, isLoading, startExercise } = useExercises();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onStart={startExercise}
        />
      ))}
    </div>
  );
}