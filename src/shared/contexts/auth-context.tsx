import { createContext } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  loggedInUser: string;
  login: () => void;
  logout: () => void;
  setLoggedInUser: (username: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loggedInUser: "",
  login: () => {},
  logout: () => {},
  setLoggedInUser: (username: string) => {},
});
