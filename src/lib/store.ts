import { create } from 'zustand';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo?: string;
}

interface TaskState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, newStatus: Task['status']) => void;
}

interface NotificationState {
  notifications: Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
  }>;
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Review Q1 Tax Returns',
      description: 'Complete review of client tax returns for Q1',
      dueDate: '2024-03-25',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'John Smith'
    },
    {
      id: '2',
      title: 'Client Meeting Preparation',
      description: 'Prepare documents for upcoming client meeting',
      dueDate: '2024-03-26',
      priority: 'medium',
      status: 'pending',
      assignedTo: 'Sarah Johnson'
    }
  ],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Math.random().toString() }],
    })),
  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  moveTask: (id, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      ),
    })),
}));

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Math.random().toString(), message, type },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));