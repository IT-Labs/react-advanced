import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Sidebar from './Sidebar';
import { TopErrorBoundary } from 'TopErrorBoundary';
import { PermissionsProvider } from 'Permissions';

export const App = () => {
  const value = { canEdit: false, canAdd: false };
  return (
    <TopErrorBoundary>
      <PermissionsProvider value={value}>
      <div className="App">
        <BrowserRouter>
          <div className="sidebar">
            <Sidebar />
          </div>
          <AppRoutes />
        </BrowserRouter>
      </div>
      </PermissionsProvider>
    </TopErrorBoundary>
  );
}

