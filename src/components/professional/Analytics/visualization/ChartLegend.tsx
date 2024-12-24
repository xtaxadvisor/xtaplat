import React from 'react';
import styles from './ChartLegend.module.css';

interface LegendItem {
  color: string;
  label: string;
  value?: number | string;
}

interface ChartLegendProps {
  items: LegendItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function ChartLegend({ items, position = 'bottom' }: ChartLegendProps) {
  const getLayoutClass = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return 'flex flex-wrap justify-center gap-4';
      case 'left':
      case 'right':
        return 'flex flex-col gap-2';
    }
  };

  return (
    <div className={getLayoutClass()}>
      {items.map((item, index) => (
        <div key={index} className={`flex items-center ${styles['legend-item']} ${styles[`legend-item-${index}`]}`}>
          <span className="text-sm text-gray-600">{item.label}</span>
          {item.value && (
            <span className="ml-2 text-sm font-medium text-gray-900">
              {item.value}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}