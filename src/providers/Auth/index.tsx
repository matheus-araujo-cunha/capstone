import { createContext, ReactNode, useContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("");
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
