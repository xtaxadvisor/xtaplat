<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Book, Clock, Award, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { ProgressChart } from './dashboard/ProgressChart';
import { RecentActivities } from './dashboard/RecentActivities';
import { UpcomingAssignments } from './dashboard/UpcomingAssignments';
export function StudentDashboard() {
<<<<<<< HEAD
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(Card, { icon: Book, title: "Courses Enrolled", value: "4", description: "2 in progress" }), _jsx(Card, { icon: Clock, title: "Study Hours", value: "32.5", description: "This month" }), _jsx(Card, { icon: Award, title: "Certifications", value: "2", description: "1 in progress" }), _jsx(Card, { icon: TrendingUp, title: "Overall Progress", value: "78%", description: "+12% this month" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Learning Progress" }), _jsx(ProgressChart, {})] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Recent Activities" }), _jsx(RecentActivities, {})] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: "Upcoming Assignments" }), _jsx(UpcomingAssignments, {})] })] }));
=======
    return (<div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card icon={Book} title="Courses Enrolled" value="4" description="2 in progress"/>
        <Card icon={Clock} title="Study Hours" value="32.5" description="This month"/>
        <Card icon={Award} title="Certifications" value="2" description="1 in progress"/>
        <Card icon={TrendingUp} title="Overall Progress" value="78%" description="+12% this month"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Learning Progress</h2>
          <ProgressChart />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h2>
          <RecentActivities />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Assignments</h2>
        <UpcomingAssignments />
      </div>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
