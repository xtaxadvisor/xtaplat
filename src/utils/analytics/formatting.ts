import { format } from 'date-fns';

export function formatMetricValue(
  value: number,
  options: {
    prefix?: string;
    suffix?: string;
    decimals?: number;
    compact?: boolean;
  } = {}
): string {
  const { 
    prefix = '', 
    suffix = '', 
    decimals = 0,
    compact = false 
  } = options;

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

export function formatDateRange(
  startDate: Date,
  endDate: Date,
  options: {
    format?: string;
    separator?: string;
  } = {}
): string {
  const { 
    format: dateFormat = 'MMM d, yyyy',
    separator = ' - '
  } = options;

  return `${format(startDate, dateFormat)}${separator}${format(endDate, dateFormat)}`;
}