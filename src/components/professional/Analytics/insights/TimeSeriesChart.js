import { jsx as _jsx } from "react/jsx-runtime";
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
    return (_jsx("div", { style: { height }, children: _jsx(Line, { data: data, options: options }) }));
}
