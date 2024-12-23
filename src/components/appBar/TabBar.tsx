import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabDrawer from "./TabDrawer";
import {
  AppBar,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoginModal from "../../pages/logIn/LoginModal";

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  //const currentTab = location.pathname;
  const currentTab = location.pathname === '/' ? '/home' : location.pathname;
  const { currentDevUser, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logOutFormOpen, setlogOutFormOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);

    setDrawerOpen(false);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue); // Navigate to the new route
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext to clear the user state
    setlogOutFormOpen(true);
  };
  const handleClose = () => {
    setlogOutFormOpen(false); // Close the dialog
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          position: "fixed", // Ensure it stays at the top
          top: 0,
          paddingTop: "10px",
          left: 0,
          width: "100%",
          zIndex: 1100,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { lg: "none", md: "block", sm: "block", xs: "block" },
              color: "white",
              "& svg": {
                fontSize: "2rem",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
<Box sx={{ml:2}}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {" "}
            Borås Kristna Center
          </Typography></Box>
         
          <Box
            sx={{
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
              gap: "50px",
              fontSize: "4rem",
              justifyContent: "center", // Center the MenuItems
              flexGrow: 1, // Allow the Box to grow to occupy space and center its content
              "&:focus": { outline: "none" },
            ml:{
                lg:10,
                xl:50,
            }
            }}
          >
            <Tabs
              value={currentTab}
              onChange={handleChange}
              aria-label="secondary tabs"
              sx={{
               
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00acc1",
                },

                "& .MuiTab-root.Mui-selected": {
                  color: "#337f83",
                },
              }}
            >
              <Tab
                value="/home"
                label="Hem"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 800 }}
              />
              <Tab
                value="/aboutUs"
                label="Om Oss"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 800 }}
              />
              <Tab
                value="/schedules"
                label="Kalender"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 900 }}
              />
              <Tab
                value="/services"
                label="Tjänster"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 800 }}
              />
              <Tab
                value="/activities"
                label="Aktivitet"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 800 }}
              />
              <Tab
                value="/contact"
                label="Kontakt"
                sx={{ fontSize: "1.2rem", color: "white", fontWeight: 800 }}
              />

              {currentDevUser ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                    fontWeight: 800,
                    ml: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#337f83",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                    }}
                  >
                    {currentDevUser.firstName}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#337f83",
                      fontWeight: 800,
                      marginLeft: "5px",
                    }}
                  >
                    /
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={handleLogout}
                    sx={{
                      color: "#337f83",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                    }}
                  >
                    logga ut
                  </Button>
                </Box>
              ) : (
                <Tab
                  label="Logga in"
                  onClick={handleLoginOpen}
                  sx={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontWeight: 800,
                  }}
                />
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      <LoginModal open={isLoginOpen} handleClose={handleLoginClose} />
      <nav>
        <TabDrawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          handleLogin={handleLoginOpen}
          handleLogout={handleLogout}
        />
      </nav>
      {/* Modal for confirm delte */}
      <Dialog open={logOutFormOpen} onClose={handleClose}>
        <DialogTitle>Logout Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have logged out successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
