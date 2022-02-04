import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CarsProviders } from "./Cars";
import { MessengerProider } from "./Messenger";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <MessengerProider>
        <CarsProviders>{children}</CarsProviders>
      </MessengerProider>
    </AuthProvider>
  );
};
