import React, { createContext, useContext, ReactNode } from "react";
import { auth, db } from "../configs/firebaseConfig";
import { Auth} from "firebase/auth";
import { Firestore } from "firebase/firestore";

// Define the shape of the context
interface FirebaseContextType {
  auth: Auth;
  db: Firestore;
}

// Create the context
const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

// Provider component
export const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Hook to use Firebase Context
export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};
