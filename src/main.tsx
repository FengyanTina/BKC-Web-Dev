// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./route";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import { EventsProvider } from "./context/EventContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <UserProvider>
        <EventsProvider>
          <RouterProvider router={router} />
          </EventsProvider>
        </UserProvider>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
