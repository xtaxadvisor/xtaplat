import type { Consultation } from '../services/api/consultation';
export declare function filterConsultations(consultations: Consultation[]): {
    upcoming: Consultation[];
    past: Consultation[];
};
export declare function canJoinConsultation(consultation: Consultation): boolean;
export declare function formatConsultationType(type: string): string;
export declare function getStatusColor(status: Consultation['status']): string;
