import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { exerciseService } from '../services/api/exercise';
import { useNotificationStore } from '../lib/store';
import type { Exercise } from '../types/student';

export function useExercises() {
  const queryClient = useQueryClient();
  const { addNotification } = useNotificationStore();

  const { data: exercises = [], isLoading } = useQuery({
    queryKey: ['exercises'],
    queryFn: exerciseService.getExercises
  });

  const startExerciseMutation = useMutation({
    mutationFn: exerciseService.startExercise,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercises'] });
      addNotification('Exercise started successfully', 'success');
    },
    onError: () => {
      addNotification('Failed to start exercise', 'error');
    }
  });

  const totalPoints = exercises.reduce((sum, exercise) => sum + exercise.points, 0);

  return {
    exercises,
    isLoading,
    totalPoints,
    startExercise: startExerciseMutation.mutate
  };
}