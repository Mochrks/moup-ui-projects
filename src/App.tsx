import React from 'react';
import './App.css';
import AppRoutes from './router';
// import { NetworkIndicator } from './components/ui-other/NetworkIndicator';

const App: React.FC = () => {
  return (
    <div>
      <AppRoutes />
      {/* <NetworkIndicator /> */}
    </div>
  );
};

export default App;