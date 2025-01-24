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
import { EventScheduleProvider } from "./context/EventScheduleContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthProvider>
        <UserProvider>
        <EventScheduleProvider>
          <RouterProvider router={router} />
          </EventScheduleProvider>
        </UserProvider>
      </AuthProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
