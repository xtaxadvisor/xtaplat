import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import { Notifications } from './components/ui/Notifications';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { SplashScreen } from './components/ui/SplashScreen';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});
function App() {
    const [showSplash, setShowSplash] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsx(ErrorBoundary, { children: _jsxs(AuthProvider, { children: [showSplash ? _jsx(SplashScreen, {}) : _jsx(AppRoutes, {}), _jsx(Notifications, {})] }) }) }) }));
}
export default App;
