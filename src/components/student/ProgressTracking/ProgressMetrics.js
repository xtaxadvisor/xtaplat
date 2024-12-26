import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Award, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import { Card } from '../../ui/Card';
export function ProgressMetrics() {
    return (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsx(Card, { icon: Award, title: "Total Points", value: "450", description: "+50 this week" }), _jsx(Card, { icon: BookOpen, title: "Completed Exercises", value: "12", description: "75% completion rate" }), _jsx(Card, { icon: TrendingUp, title: "Current Streak", value: "5 days", description: "Personal best: 7 days" }), _jsx(Card, { icon: CheckCircle, title: "Achievements", value: "8/15", description: "3 new this month" })] }));
}
