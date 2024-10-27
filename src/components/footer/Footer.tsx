import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "transparent",
        backgroundColor:"#202A44",
        color: "#CED9E5",
        
    
        padding: "20px",
        textAlign: "center",
        bottom: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >

     
      <Box>
      <Typography variant="h5" sx={{display:"flex",flexDirection:"column", }}>
        <Link href="/home" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
          Home
        </Link>
       
        <Link href="/aboutUs" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
          About Us
        </Link>
        <Link href="/schedules" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
          Schedules
        </Link>
        <Link href="/services" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
          Service
        </Link>
        <Link href="/activities" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
         Activity
        </Link>
        <Link href="/contact" color="inherit" sx={{ mb: 1,textDecoration:"none",fontWeight:"700", }}>
         Contact Us
        </Link>
        </Typography>
        
      </Box>
      <Typography variant="body1" >
        &copy; {new Date().getFullYear()} Borås Kristna Center. All rights
        reserved.
      </Typography>
      <Box>
      <Typography variant="body1">
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
       
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>

        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact Us
        </Link>
        </Typography>
      </Box>
      
    </Box>
  );
};

export default Footer;
