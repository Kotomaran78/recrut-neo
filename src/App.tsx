import { AuthProvider } from '@context/AuthContext';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <AuthProvider>
        <main>
          <Outlet />
        </main>
    </AuthProvider>
  );
};

export default App;
