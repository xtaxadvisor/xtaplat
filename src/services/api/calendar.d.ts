export interface Event {
    id: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    type: 'meeting' | 'deadline' | 'reminder';
    location?: string;
    isVirtual?: boolean;
    meetingLink?: string;
    attendees?: Array<{
        id: string;
        name: string;
        email: string;
        status: 'pending' | 'accepted' | 'declined';
    }>;
    reminders?: Array<{
        type: 'email' | 'notification';
        time: number;
    }>;
}
export interface CreateEventDTO {
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    type: Event['type'];
    location?: string;
    isVirtual?: boolean;
    meetingLink?: string;
    attendees?: string[];
    reminders?: Event['reminders'];
}
export interface UpdateEventDTO extends Partial<CreateEventDTO> {
    id: string;
}
export declare const calendarService: {
    getEvents: () => Promise<Event[]>;
    getEventById: (id: string) => Promise<Event>;
    createEvent: (data: CreateEventDTO) => Promise<Event>;
    updateEvent: ({ id, ...data }: UpdateEventDTO) => Promise<Event>;
    deleteEvent: (id: string) => Promise<void>;
    getAvailability: (date: string) => Promise<{
        start: string;
        end: string;
    }[]>;
    syncCalendar: (provider: string) => Promise<void>;
};
