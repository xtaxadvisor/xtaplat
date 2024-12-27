import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind or global styles
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
