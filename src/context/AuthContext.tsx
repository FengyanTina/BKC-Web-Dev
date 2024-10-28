import React, { createContext, useCallback, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { User } from "../models/User";
import useInactivityLogout from "../hooks/UserInactiveLogout";

export interface AuthContextType {
  currentDevUser: User | null;
  login: (userName: string, password: string) => void;
  logout: () => void;
  error: string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentDevUser, setCurrentDevUser] = useLocalStorage<User | null>(
    "currentDevUser",
    null
  );
  const [storedUsers] = useLocalStorage<User[]>("devUsers", []);
  const [error, setError] = useState<string | null>(null);
  const timeoutDuration = 20 * 60 * 1000;

  // Handle login logic with error handling
  const login = (userName: string, password: string) => {
    setError(null);
    const user = storedUsers.find(
      (user) => user.userName === userName && user.userId === password
    );

    if (!user) {
      setError("Login failed. Please check your credentials.");
      return;
    }

    setCurrentDevUser(user); // Store the user in localStorage
    setError(null); 
    console.log('Login successful:', user);
  };

  // Handle logout
  const logout = useCallback(() => {
    setCurrentDevUser(null); // Clear current user
    localStorage.removeItem("currentDevUser");
    setError(null); 
  }, []);

  // Auto-logout after inactivity
  useInactivityLogout(timeoutDuration, logout);

  return (
    <AuthContext.Provider value={{ currentDevUser,  login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
