import type { Consultation } from '../../../services/api/consultation';
interface ConsultationGroupProps {
    title: string;
    consultations: Consultation[];
    onJoin?: (consultation: Consultation) => void;
    onCancel?: (consultation: Consultation) => void;
    onReschedule?: (consultation: Consultation) => void;
}
export declare function ConsultationGroup({ title, consultations, onJoin, onCancel, onReschedule }: ConsultationGroupProps): any;
export {};
