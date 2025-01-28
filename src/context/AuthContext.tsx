import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { User } from "../models/User";
import useInactivityLogout from "../hooks/UserInactiveLogout";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../configs/firebaseConfig"; // Your Firebase config
import { doc, getDoc } from "firebase/firestore";

export interface LogInContextType {
  currentDevUser: User | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  error: string | null;
  loading: boolean,
}

export const AuthContext = createContext<LogInContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentDevUser, setCurrentDevUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  const timeoutDuration = 20 * 60 * 1000;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setCurrentDevUser({ id: user.uid, ...userDoc.data() } as User);
        }
      } else {
        setCurrentDevUser(undefined);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


const login = async (email: string, password: string): Promise<void> => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setCurrentDevUser({ id: user.uid, ...userDoc.data() } as User);
        setError(null);
      } else {
        console.error("User data not found in Firestore.");
      }
    } catch (error: any) {
      console.error("Login failed:", error.message);
      throw new Error(error.message);
    }
  };

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        setCurrentDevUser(undefined);
        console.log("User logged out successfully.");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  }, []);

  // Auto-logout after inactivity
  useInactivityLogout(timeoutDuration, logout);

  return (
    <AuthContext.Provider value={{ currentDevUser,  login, logout, error,loading }}>
       {!loading && children}
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
