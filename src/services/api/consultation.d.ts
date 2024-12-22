export interface Consultation {
    id: string;
    clientId: string;
    professionalId: string;
    startTime: string;
    endTime: string;
    status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
    type: 'tax-planning' | 'financial-review' | 'investment-advisory' | 'general';
    meetingLink?: string;
    notes?: string;
    documents?: string[];
    recording?: string;
}
export interface ScheduleConsultationDTO {
    clientId: string;
    professionalId: string;
    startTime: string;
    endTime: string;
    type: Consultation['type'];
    notes?: string;
}
export interface UpdateConsultationDTO extends Partial<ScheduleConsultationDTO> {
    id: string;
    status?: Consultation['status'];
}
export declare const consultationService: {
    getAll: () => Promise<Consultation[]>;
    getById: (id: string) => Promise<Consultation>;
    getByClient: (clientId: string) => Promise<Consultation[]>;
    getByProfessional: (professionalId: string) => Promise<Consultation[]>;
    schedule: (data: ScheduleConsultationDTO) => Promise<Consultation>;
    update: ({ id, ...data }: UpdateConsultationDTO) => Promise<Consultation>;
    cancel: (id: string, reason?: string) => Promise<Consultation>;
    generateMeetingLink: (id: string) => Promise<{
        meetingLink: string;
    }>;
    uploadDocument: (id: string, file: File) => Promise<{
        documentId: string;
    }>;
    getRecording: (id: string) => Promise<{
        recordingUrl: string;
    }>;
};
