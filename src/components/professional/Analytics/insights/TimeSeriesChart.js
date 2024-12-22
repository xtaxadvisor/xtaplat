<<<<<<< HEAD
import { jsx as _jsx } from "react/jsx-runtime";
=======
import React from 'react';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
import { Line } from 'react-chartjs-2';
import { formatDate } from '../../../../utils/date';
export function TimeSeriesChart({ series, height = 300 }) {
    const data = {
        labels: series[0].data.map(d => formatDate(d.date)),
        datasets: series.map(s => ({
            label: s.label,
            data: s.data.map(d => d.value),
            borderColor: s.color,
            backgroundColor: `${s.color}20`,
            fill: true,
            tension: 0.4
        }))
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };
<<<<<<< HEAD
    return (_jsx("div", { style: { height }, children: _jsx(Line, { data: data, options: options }) }));
=======
    return (<div style={{ height }}>
      <Line data={data} options={options}/>
    </div>);
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c
}
