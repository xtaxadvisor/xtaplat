import React from 'react';

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
        <div key={index} className="flex items-center">
          <div 
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: item.color }}
          />
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