import { formatDistanceToNow, format } from 'date-fns';
export function formatTimeAgo(date) {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}
export function formatDate(date) {
    return format(new Date(date), 'MMM d, yyyy');
}
export function formatDateTime(date) {
    return format(new Date(date), 'MMM d, yyyy h:mm a');
}
export function formatTime(date) {
    return format(new Date(date), 'h:mm a');
}
