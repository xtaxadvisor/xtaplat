import { api } from '../api';
import type { Exercise } from '../../types/student';

export const exerciseService = {
  getExercises: () => 
    api.get<Exercise[]>('/exercises'),

  getExerciseById: (id: string) => 
    api.get<Exercise>(`/exercises/${id}`),

  startExercise: (id: string) => 
    api.post<{ sessionId: string }>(`/exercises/${id}/start`),

  submitExercise: (id: string, answers: Record<string, any>) => 
    api.post<{ score: number; feedback: string[] }>(`/exercises/${id}/submit`, answers),

  getProgress: () => 
    api.get<{
      completed: number;
      total: number;
      points: number;
      recentScores: Array<{ date: string; score: number }>;
    }>('/exercises/progress')
};