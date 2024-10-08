import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import TabBar from "./components/appBar/TabBar";
import Footer from "./components/footer/Footer";


export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home"); // Adjust this to the default route (start page)
  }, [navigate]);

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensure the container takes up the full height of the viewport
          backgroundColor: "#f0f4f8", // Background color that covers the whole screen
        }}
      >
        {/* <DrawerAppBar /> */}
        <TabBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Box
          component="footer"
          sx={{
            backgroundColor: "#f0f4f8",
            mt: "auto",
          }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}
