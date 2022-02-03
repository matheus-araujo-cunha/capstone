import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

import { api } from "../../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  city: string;
  state: string;
  description: string;
  password?: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface AuthContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  logOut: () => void;
  setData: (data: AuthState) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Capstone:accessToken");
    const user = localStorage.getItem("@Capstone:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/login", { email, password });
    const { accessToken, user } = response.data;

    localStorage.setItem("@Capstone:accessToken", accessToken);
    localStorage.setItem("@Capstone:user", JSON.stringify(user));

    setData({ accessToken, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@Capstone:accessToken");
    localStorage.removeItem("@Capstone:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        logOut,
        setData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
