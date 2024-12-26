import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Notifications } from './components/ui/Notifications';
import { AuthProvider } from './contexts/AuthContext';
import { SplashScreen } from './components/ui/SplashScreen';
import SupabaseDataComponent from './components/SupabaseDataComponent';
import ChatComponent from './components/ai/chat/ChatComponent';
// Create a React Query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});
const App = () => {
    const [showSplash, setShowSplash] = React.useState(true);
    // Splash screen timer
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsx(ErrorBoundary, { children: _jsx(AuthProvider, { children: showSplash ? (_jsx(SplashScreen, {})) : (_jsxs("div", { className: styles.App, children: [_jsx("header", { className: styles['App-header'], children: _jsx("h1", { className: `${styles['text-2xl']} ${styles['text-center']}`, children: "Welcome to the App" }) }), _jsx("main", { className: "p-4", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(SupabaseDataComponent, {}) }), _jsx(Route, { path: "/chat", element: _jsx(ChatComponent, {}) })] }) }), _jsx(Notifications, {})] })) }) }) }) }));
};
export default App;
