<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export function BarChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'New Clients',
                data: [12, 15, 18, 14, 20, 25],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderRadius: 4,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };
<<<<<<< HEAD
    return (_jsx("div", { className: "w-full h-[300px]", children: _jsx(Bar, { data: data, options: options }) }));
=======
    return (<div className="w-full h-[300px]">
      <Bar data={data} options={options}/>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
