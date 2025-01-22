
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./route";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { FirebaseProvider } from "./context/FirebaseContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <FirebaseProvider>
    <AuthProvider>
        <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
    </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
