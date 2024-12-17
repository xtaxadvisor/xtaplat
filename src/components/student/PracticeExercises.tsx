import React from 'react';
import { BookOpen, Award, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function PracticeExercises() {
  const exercises = [
    {
      id: '1',
      title: 'Tax Calculation Basics',
      description: 'Learn the fundamentals of tax calculations through interactive exercises.',
      duration: '45 minutes',
      difficulty: 'beginner',
      points: 100
    },
    {
      id: '2',
      title: 'Financial Statement Analysis',
      description: 'Practice analyzing balance sheets and income statements.',
      duration: '60 minutes',
      difficulty: 'intermediate',
      points: 150
    },
    {
      id: '3',
      title: 'Advanced Tax Planning',
      description: 'Master complex tax planning scenarios and strategies.',
      duration: '90 minutes',
      difficulty: 'advanced',
      points: 200
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Practice Exercises</h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Total Points:</span> 450
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{exercise.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                  exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
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

              <Button variant="primary" className="w-full" icon={BookOpen}>
                Start Exercise
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}