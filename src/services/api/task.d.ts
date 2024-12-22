import type { Task } from '../../types';
export interface CreateTaskDTO {
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    assignedTo?: string;
    clientId?: string;
}
export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
    id: string;
    status?: 'pending' | 'in-progress' | 'completed';
}
export declare const taskService: {
    getAll: () => Promise<Task[]>;
    getById: (id: string) => Promise<Task>;
    getByClient: (clientId: string) => Promise<Task[]>;
    create: (data: CreateTaskDTO) => Promise<Task>;
    update: ({ id, ...data }: UpdateTaskDTO) => Promise<Task>;
    delete: (id: string) => Promise<void>;
    updateStatus: (id: string, status: Task["status"]) => Promise<Task>;
};
