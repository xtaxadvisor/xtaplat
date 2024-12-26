import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProgressHeader } from './ProgressHeader';
import { ProgressMetrics } from './ProgressMetrics';
import { ProgressChart } from './ProgressChart';
import { AchievementList } from './AchievementList';
export function ProgressTracking() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(ProgressHeader, {}), _jsx(ProgressMetrics, {}), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsx(ProgressChart, {}), _jsx(AchievementList, {})] })] }));
}
