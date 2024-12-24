import type { Workflow } from '../../types/automation';
export declare function validateWorkflow(workflow: Workflow): string[];
export declare function findCycles(workflow: Workflow): string[][];
