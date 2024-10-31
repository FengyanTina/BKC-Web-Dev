import React from "react";
import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
interface introProp{
    content:string[]
}
export default function Intro({content}:introProp  ) {
  const paragraphs = [
    "en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud. en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge. en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
    "Additional paragraph to demonstrate more content handling...en plats för mötet mellan Gud och en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
    "More content to ensure that overflow is demonstrated properly.en plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud. en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge. en plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden.",
    // Add as many paragraphs as needed
  ];

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
              fontSize: {
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "28px",
              },
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
              fontSize: {
                lg: "25px",
                md: "20px",
                sm: "20px",
                xs: "18px",
              },
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
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
