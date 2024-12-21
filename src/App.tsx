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

const App: React.FC = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  // Splash screen timer
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <AuthProvider>
            {showSplash ? (
              <SplashScreen />
            ) : (
              <div className={styles.App}>
                <header className={styles['App-header']}>
                  <h1 className={`${styles['text-2xl']} ${styles['text-center']}`}>Welcome to the App</h1>
                </header>
                <main className="p-4">
                  <Routes>
                    <Route path="/" element={<SupabaseDataComponent />} />
                    <Route path="/chat" element={<ChatComponent />} />
                  </Routes>
                </main>
                <Notifications />
              </div>
            )}
          </AuthProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;