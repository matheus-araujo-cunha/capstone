import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CarsProviders } from "./Cars";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <CarsProviders>{children}</CarsProviders>
    </AuthProvider>
  );
};
