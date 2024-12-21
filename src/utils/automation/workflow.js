export function validateWorkflow(workflow) {
    const errors = [];
    if (!workflow.name) {
        errors.push('Workflow name is required');
    }
    if (!workflow.trigger) {
        errors.push('Workflow trigger is required');
    }
    if (!workflow.steps.length) {
        errors.push('Workflow must have at least one step');
    }
    // Validate step connections
    const stepIds = new Set(workflow.steps.map(step => step.id));
    workflow.steps.forEach(step => {
        step.nextSteps.forEach(nextStepId => {
            if (!stepIds.has(nextStepId)) {
                errors.push(`Invalid step connection: ${nextStepId} does not exist`);
            }
        });
    });
    return errors;
}
export function findCycles(workflow) {
    const cycles = [];
    const visited = new Set();
    const path = [];
    function dfs(stepId) {
        if (path.includes(stepId)) {
            const cycle = path.slice(path.indexOf(stepId));
            cycles.push(cycle);
            return;
        }
        if (visited.has(stepId))
            return;
        visited.add(stepId);
        path.push(stepId);
        const step = workflow.steps.find(s => s.id === stepId);
        step?.nextSteps.forEach(nextId => dfs(nextId));
        path.pop();
    }
    workflow.steps.forEach(step => dfs(step.id));
    return cycles;
}
