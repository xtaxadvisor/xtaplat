import { api } from '../api';
export const exerciseService = {
    getExercises: () => api.get('/exercises'),
    getExerciseById: (id) => api.get(`/exercises/${id}`),
    startExercise: (id) => api.post(`/exercises/${id}/start`),
    submitExercise: (id, answers) => api.post(`/exercises/${id}/submit`, answers),
    getProgress: () => api.get('/exercises/progress')
};
