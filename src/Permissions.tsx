import { createContext, useContext } from 'react';

interface ContextProps {
  canEdit: boolean;
  canAdd: boolean;
}

export const defaultValue = {
  canEdit: true,
  canAdd: true,
}

const PermissionsContext = createContext<ContextProps>(defaultValue);

export const PermissionsProvider = PermissionsContext.Provider;

export const usePermissions = () => useContext(PermissionsContext);