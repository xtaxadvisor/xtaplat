import { differenceInSeconds, formatDuration, intervalToDuration } from 'date-fns';

export function calculateProcessingTime(startTime: string): string {
  const seconds = differenceInSeconds(new Date(), new Date(startTime));
  
  return formatDuration(
    intervalToDuration({
      start: 0,
      end: seconds * 1000
    }),
    { format: ['minutes', 'seconds'] }
  );
}

export function estimateRemainingTime(
  completedSteps: number,
  totalSteps: number,
  startTime: string
): string {
  if (completedSteps === 0) return 'Calculating...';
  
  const elapsedSeconds = differenceInSeconds(new Date(), new Date(startTime));
  const secondsPerStep = elapsedSeconds / completedSteps;
  const remainingSteps = totalSteps - completedSteps;
  const remainingSeconds = remainingSteps * secondsPerStep;
  
  return formatDuration(
    intervalToDuration({
      start: 0,
      end: remainingSeconds * 1000
    }),
    { format: ['minutes', 'seconds'] }
  );
}

export function calculateStepProgress(steps: ProcessingStep[]): number {
  const completedSteps = steps.filter(s => s.status === 'completed').length;
  return Math.round((completedSteps / steps.length) * 100);
}