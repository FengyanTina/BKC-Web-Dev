import React, { createContext, useCallback, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { User, UserCategory } from "../models/User";
import useInactivityLogout from "../hooks/UserInactiveLogout";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../configs/firebaseConfig"; // Your Firebase config
import { doc, getDoc, getFirestore } from "firebase/firestore";

export interface LogInContextType {
  currentDevUser: User | null;
  login: (userName: string, password: string) => void;
  logout: () => void;
  error: string | null;
}

export const AuthContext = createContext<LogInContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
//   const [currentDevUser, setCurrentDevUser] = useLocalStorage<User | null>(
//     "currentDevUser",
//     null
//   );
  const [currentDevUser, setCurrentDevUser] = useState<User | null>(null);
  const [storedUsers] = useLocalStorage<User[]>("devUsers", []);
  const [error, setError] = useState<string | null>(null);
  const timeoutDuration = 20 * 60 * 1000;

  // Handle login logic with error handling
//   const login = (userName: string, password: string) => {
//     setError(null);
    
//     const user = storedUsers.find(
//       (user) => user.userName === userName && user.userId === password
//     );

//     if (!user) {
//       setError("Login failed. Please check your credentials.");
//       return;
//     }

//     setCurrentDevUser(user); // Store the user in localStorage
//     setError(null); 
//     console.log('Login successful:', user);
//   };
const login = (email:string, password:string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log('Logged in user:', user);
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login failed:', errorCode, errorMessage);
      });
  };

// const login = (email: string, password: string) => {
//     setError(null);
  
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async (userCredential) => {
//         const user = userCredential.user;
  
//         // Fetch user details from Firestore
//         const userDataFromFirestore = await fetchUserFromFirestore(user.uid);
  
//         const userData: User = {
//           id: user.uid,  // Firebase user ID
//           firstName: "",  // Set to empty or fetch from Firestore if necessary
//           lastName: "",  // Set to empty or fetch from Firestore if necessary
//           userId: user.uid,  // Firebase user ID
//           userName: userDataFromFirestore.userName ?? "",  // Retrieve the userName from Firestore
//           email: user.email ?? "",
//           category: (userDataFromFirestore.category as UserCategory) ?? UserCategory.Member,  // Default to Member
//           phoneNumber: user.phoneNumber ?? "",  // Use phoneNumber from Firebase
//           image: user.photoURL ?? "",  // Optional, if photoURL is available
//           address: userDataFromFirestore.address ?? "",  // Assuming you store address in Firestore
//           zipcode: userDataFromFirestore.zipcode ?? "",  // Assuming you store zipcode in Firestore
//         };
  
//         setCurrentDevUser(userData);  // Store the user data
//         setError(null);
//         console.log('Login successful:', userData);
//       })
//       .catch((err) => {
//         setError("Login failed. Please check your credentials.");
//         console.error('Login error:', err);
//       });
//   };
  
//   const fetchUserFromFirestore = async (userId: string) => {
//     try {
//       const db = getFirestore();
//       const userRef = doc(db, "users", userId); // Firestore reference to the user
//       const userDoc = await getDoc(userRef);

//       if (userDoc.exists()) {
//         return userDoc.data(); // Return user data from Firestore
//       } else {
//         console.log("No such user in Firestore");
//         return {}; // Return empty object if user doesn't exist
//       }
//     } catch (error) {
//       console.error("Error fetching user from Firestore:", error);
//       return {}; // Return empty object if there's an error
//     }
//   };

  // Handle logout
//   const logout = useCallback(() => {
//     setCurrentDevUser(null); // Clear current user
//     localStorage.removeItem("currentDevUser");
//     setError(null); 
//   }, []);

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        setCurrentDevUser(null);
        console.log("User logged out successfully.");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
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
