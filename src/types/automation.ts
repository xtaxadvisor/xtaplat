export interface TriggerConfig {
  type: 'schedule' | 'event' | 'condition';
  startDate?: string;
  startTime?: string;
  event?: string;
  condition?: {
    field: string;
    operator: string;
    value: any;
  };
}

export interface WorkflowStep {
  id: string;
  type: string;
  config: Record<string, any>;
  nextSteps: string[];
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: TriggerConfig;
  steps: WorkflowStep[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}