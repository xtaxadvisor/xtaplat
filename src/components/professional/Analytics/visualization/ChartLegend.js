import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ChartLegend.module.css';
export function ChartLegend({ items, position = 'bottom' }) {
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
    return (_jsx("div", { className: getLayoutClass(), children: items.map((item, index) => (_jsxs("div", { className: `flex items-center ${styles['legend-item']} ${styles[`legend-item-${index}`]}`, children: [_jsx("span", { className: "text-sm text-gray-600", children: item.label }), item.value && (_jsx("span", { className: "ml-2 text-sm font-medium text-gray-900", children: item.value }))] }, index))) }));
}
