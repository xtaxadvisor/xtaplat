import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AIMonitor } from '../../components/ai/AIMonitor';
import { useAIMonitoring } from '../../hooks/useAIMonitoring';
import { Button } from '../../components/ui/Button';
import { Bug, Trash2 } from 'lucide-react';
export default function AIMonitoringDashboard() {
    const { isDebugEnabled, toggleDebug, clearHistory } = useAIMonitoring();
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "AI System Monitor" }), _jsxs("div", { className: "flex space-x-3", children: [_jsxs(Button, { variant: "outline", icon: Bug, onClick: toggleDebug, children: [isDebugEnabled ? 'Disable' : 'Enable', " Debug Mode"] }), _jsx(Button, { variant: "outline", icon: Trash2, onClick: clearHistory, children: "Clear History" })] })] }), _jsx(AIMonitor, {})] }));
}
