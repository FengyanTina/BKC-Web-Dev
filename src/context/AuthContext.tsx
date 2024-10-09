// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

import { fetchUser } from "../mocks/mockedApi"; // Actual or mock API call
import { User } from "../models/User";

interface AuthContextType {
  user: User | null;
  login: (userId: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Load user from localStorage if it exists, for session persistence
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function to fetch user and store in context
  const login = async (userId: string) => {
    const userData = await fetchUser(userId); // Simulate or use actual API call
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage for persistence
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear stored user on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
