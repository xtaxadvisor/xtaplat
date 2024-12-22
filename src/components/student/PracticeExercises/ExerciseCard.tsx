import React from 'react';
import { BookOpen, Award, Clock } from 'lucide-react';
import { Button } from '../../ui/Button';
import type { Exercise } from '../../../types/student';

interface ExerciseCardProps {
  exercise: Exercise;
  onStart: (id: string) => void;
}

export function ExerciseCard({ exercise, onStart }: ExerciseCardProps) {
  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{exercise.title}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyStyle(exercise.difficulty)}`}>
            {exercise.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {exercise.duration}
          </div>
          <div className="flex items-center text-gray-500">
            <Award className="h-4 w-4 mr-1" />
            {exercise.points} points
          </div>
        </div>

        <Button 
          variant="primary" 
          className="w-full" 
          icon={BookOpen}
          onClick={() => onStart(exercise.id)}
        >
          Start Exercise
        </Button>
      </div>
    </div>
  );
}