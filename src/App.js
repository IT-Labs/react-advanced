import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import Sidebar from './Sidebar.tsx';
import { PermisssionsProvider } from './Permissions.tsx';

const getPermissions = () => ({
  canSeeUsers: true,
  canSeeProducts: true
})

function App() {
  return (
    <div className="App">
      <PermisssionsProvider value={getPermissions()}>
        <BrowserRouter>
          <div className="sidebar">
            <Sidebar />
          </div>
          <AppRoutes />
        </BrowserRouter>
      </PermisssionsProvider>
    </div>
  );
}

export default App;
