import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from '@/lib/alerts/sonner';
import { TooltipProvider } from '@/components/ui-shadcn/tooltip';
import AppRoutes from './router';
import { store } from '@/lib/redux/store';
import './App.css';
import { ThemeProvider } from 'next-themes';
import { NetworkIndicator } from './components/ui-main/NetworkIndicator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <AppRoutes />
          <Toaster />
          <NetworkIndicator />
        </TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;