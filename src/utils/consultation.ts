import type { Consultation } from '../services/api/consultation';

export function filterConsultations(consultations: Consultation[]) {
  const now = new Date();
  
  const upcoming = consultations.filter(
    c => new Date(c.startTime) > now && c.status !== 'cancelled'
  );

  const past = consultations.filter(
    c => new Date(c.startTime) <= now || c.status === 'cancelled'
  );

  return { upcoming, past };
}

export function canJoinConsultation(consultation: Consultation): boolean {
  const now = new Date();
  const startTime = new Date(consultation.startTime);
  const timeUntilStart = startTime.getTime() - now.getTime();
  
  return (
    consultation.status === 'scheduled' &&
    Math.abs(timeUntilStart) <= 5 * 60 * 1000 && // 5 minutes before
    !!consultation.meetingLink
  );
}

export function formatConsultationType(type: string): string {
  return type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function getStatusColor(status: Consultation['status']): string {
  switch (status) {
    case 'scheduled':
      return 'bg-green-100 text-green-800';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-gray-100 text-gray-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}