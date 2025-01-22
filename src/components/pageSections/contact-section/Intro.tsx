import React from "react";
import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
interface introProp{
    content:string[]
}
export default function Intro({content}:introProp  ) {
  return (
    <Box className="intro-container">
      <Grid>
        <Box
          sx={{
            paddingBottom: "40px",
            overflow: "hidden",
            paddingTop: {
              md: "10px",
              sm: "60px",
              xs: "90px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize:  "25px",
            }}
            variant="h3"
          >
            Vår vision
          </Typography>
        </Box>
        <Box
          sx={{
            paddingBottom: { xs: "40px", sm: "50px" },
          }}
        >
          <Typography
            className="intro-p"
            sx={{
              fontSize: "20px",
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "calc(1.5em * 7)", // 9 lines when not expanded

              lineHeight: 1.3,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
              overflowY: "auto",
            }}
          >
            {content.map((paragraph, index) => (
              <p key={index} style={{
                marginBottom: "4px", 
              }}>
                {paragraph}
               
              </p>
            ))}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
