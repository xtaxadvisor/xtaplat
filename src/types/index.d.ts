export interface User {
    id: string;
    name: string;
    email: string;
    role: 'client' | 'investor' | 'professional' | 'admin';
}
export interface MenuItem {
    title: string;
    href: string;
    icon: React.ComponentType;
}
export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    status: 'active' | 'inactive';
    lastContact: string;
    notes?: string;
}
export interface Document {
    id: string;
    title: string;
    type: string;
    size: string;
    uploadedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    clientId: string;
    tags?: string[];
}
export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo?: string;
    clientId?: string;
}
export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    timestamp: string;
    read: boolean;
    attachments?: string[];
}
