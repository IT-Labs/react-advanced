import { createContext, useContext } from "react";

export const permissionsContext = createContext({
  value: {}
});


export const PermisssionsProvider = permissionsContext.Provider;

export const usePermissions = () => useContext(permissionsContext);

