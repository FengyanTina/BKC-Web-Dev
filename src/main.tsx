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
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <FirebaseProvider>
      <AuthProvider>
        <UserProvider>
        <EventsProvider>
          <RouterProvider router={router} />
          </EventsProvider>
        </UserProvider>
      </AuthProvider>
    </FirebaseProvider>
    </ThemeProvider>
  </React.StrictMode>
  
);
