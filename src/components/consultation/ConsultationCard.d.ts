import type { Consultation } from '../../services/api/consultation';
interface ConsultationCardProps {
    consultation: Consultation;
    onJoin?: () => void;
    onCancel?: () => void;
    onReschedule?: () => void;
}
export declare function ConsultationCard({ consultation, onCancel, onReschedule }: ConsultationCardProps): any;
export {};
