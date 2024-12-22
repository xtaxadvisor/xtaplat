export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  category?: string;
  prerequisites?: string[];
  completionRate?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  earnedAt: string;
  icon: string;
  category: string;
}

export interface Progress {
  totalPoints: number;
  completedExercises: number;
  currentStreak: number;
  achievements: Achievement[];
  weeklyProgress: Array<{
    date: string;
    value: number;
  }>;
}