import React from 'react';
import { Line } from 'react-chartjs-2';
import { formatDate } from '../../../../utils/date';

interface TimeSeriesData {
  label: string;
  data: Array<{
    date: string;
    value: number;
  }>;
  color: string;
}

interface TimeSeriesChartProps {
  series: TimeSeriesData[];
  height?: number;
}

export function TimeSeriesChart({ series, height = 300 }: TimeSeriesChartProps) {
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
        position: 'top' as const
      },
      tooltip: {
        mode: 'index' as const,
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

  return (
    <div style={{ height }}>
      <Line data={data} options={options} />
    </div>
  );
}