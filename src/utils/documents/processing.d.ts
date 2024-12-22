export declare function calculateProcessingTime(startTime: string): string;
export declare function estimateRemainingTime(completedSteps: number, totalSteps: number, startTime: string): string;
export declare function calculateStepProgress(steps: ProcessingStep[]): number;

interface ProcessingStep {
  // Define the properties of ProcessingStep here
  stepName: string;
  stepDuration: number;
}
