import { jsx as _jsx } from "react/jsx-runtime";
import { ExerciseCard } from './ExerciseCard';
import { useExercises } from '../../../hooks/useExercises';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
export function ExerciseList() {
    const { exercises, isLoading, startExercise } = useExercises();
    if (isLoading) {
        return _jsx(LoadingSpinner, {});
    }
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: exercises.map((exercise) => (_jsx(ExerciseCard, { exercise: exercise, onStart: startExercise }, exercise.id))) }));
}
