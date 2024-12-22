<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Users, UserPlus, UserMinus, Activity } from 'lucide-react';
import { Card } from '../../ui/Card';
import { LineChart } from '../charts/LineChart';
import { useAnalytics } from '../../../hooks/useAnalytics';
export function UserAnalytics() {
    const { metrics, isLoading } = useAnalytics('month');
    const stats = [
        {
            title: 'Total Users',
            value: metrics?.totalUsers || 0,
            change: '+12%',
            icon: Users
        },
        {
            title: 'New Users',
            value: metrics?.newUsers || 0,
            change: '+5%',
            icon: UserPlus
        },
        {
            title: 'Active Users',
            value: metrics?.activeUsers || 0,
            change: '+8%',
            icon: Activity
        },
        {
            title: 'Churn Rate',
            value: `${metrics?.churnRate || 0}%`,
            change: '-2%',
            icon: UserMinus
        }
    ];
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((stat) => (_jsx(Card, { title: stat.title, value: stat.value, description: stat.change, icon: stat.icon }, stat.title))) }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "User Growth" }), _jsx(LineChart, {})] })] }));
=======
    return (<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (<Card key={stat.title} title={stat.title} value={stat.value} description={stat.change} icon={stat.icon}/>))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">User Growth</h3>
        <LineChart />
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
