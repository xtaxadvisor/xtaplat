import { create } from 'zustand';
export const useTaskStore = create((set) => ({
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
    addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Math.random().toString() }],
    })),
    updateTask: (id, updates) => set((state) => ({
        tasks: state.tasks.map((task) => task.id === id ? { ...task, ...updates } : task),
    })),
    deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
    })),
    moveTask: (id, newStatus) => set((state) => ({
        tasks: state.tasks.map((task) => task.id === id ? { ...task, status: newStatus } : task),
    })),
}));
export const useNotificationStore = create((set) => ({
    notifications: [],
    addNotification: (message, type) => set((state) => ({
        notifications: [
            ...state.notifications,
            { id: Math.random().toString(), message, type },
        ],
    })),
    removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
