import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AI_FEATURES } from '../../services/ai/features';
import { Button } from '../ui/Button';
export function AIFeatureSelector({ context, onSelect }) {
    const features = AI_FEATURES[context] || [];
    return (_jsx("div", { className: "grid grid-cols-2 gap-2 p-2", children: features.map((feature) => (_jsx(Button, { variant: "outline", className: "text-left", onClick: () => onSelect(feature.id, feature.prompt), children: _jsxs("div", { children: [_jsx("div", { className: "font-medium", children: feature.name }), _jsx("div", { className: "text-sm text-gray-500", children: feature.description })] }) }, feature.id))) }));
}
