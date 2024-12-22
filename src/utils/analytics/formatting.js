import { format } from 'date-fns';
export function formatMetricValue(value, options = {}) {
    const { prefix = '', suffix = '', decimals = 0, compact = false } = options;
    let formattedValue = value;
    if (compact) {
        const units = ['', 'K', 'M', 'B'];
        let unitIndex = 0;
        while (formattedValue >= 1000 && unitIndex < units.length - 1) {
            formattedValue /= 1000;
            unitIndex++;
        }
        return `${prefix}${formattedValue.toFixed(decimals)}${units[unitIndex]}${suffix}`;
    }
    return `${prefix}${formattedValue.toFixed(decimals)}${suffix}`;
}
export function formatDateRange(startDate, endDate, options = {}) {
    const { format: dateFormat = 'MMM d, yyyy', separator = ' - ' } = options;
    return `${format(startDate, dateFormat)}${separator}${format(endDate, dateFormat)}`;
}
