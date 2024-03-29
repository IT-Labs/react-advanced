import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Products from './products/Products';
import Users from './users/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users/>} />
      <Route path="/products" element={<Products />} />
      <Route
        path="*"
        element={<Navigate to="/users" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;