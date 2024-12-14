import { api } from '../api';

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

export const consultationService = {
  getAll: () => 
    api.get<Consultation[]>('/consultations'),

  getById: (id: string) => 
    api.get<Consultation>(`/consultations/${id}`),

  getByClient: (clientId: string) => 
    api.get<Consultation[]>(`/clients/${clientId}/consultations`),

  getByProfessional: (professionalId: string) => 
    api.get<Consultation[]>(`/professionals/${professionalId}/consultations`),

  schedule: (data: ScheduleConsultationDTO) => 
    api.post<Consultation>('/consultations', data),

  update: ({ id, ...data }: UpdateConsultationDTO) => 
    api.put<Consultation>(`/consultations/${id}`, data),

  cancel: (id: string, reason?: string) => 
    api.put<Consultation>(`/consultations/${id}/cancel`, { reason }),

  generateMeetingLink: (id: string) => 
    api.post<{ meetingLink: string }>(`/consultations/${id}/meeting-link`),

  uploadDocument: (id: string, file: File) => {
    const formData = new FormData();
    formData.append('document', file);
    return api.post<{ documentId: string }>(`/consultations/${id}/documents`, formData);
  },

  getRecording: (id: string) => 
    api.get<{ recordingUrl: string }>(`/consultations/${id}/recording`),
};