import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


import TabBar from "./components/appBar/TabBar";
import Footer from "./components/footer/Footer";


export default function App() {

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", 
          backgroundColor: "#f0f4f8", 
        }}
      >
        <TabBar />
        <Box  sx={{ flexGrow: 1, width:"100%",overflow:"hidden" }}>
          <Outlet />
        </Box>
        <Box
          component="footer"
         
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
}
