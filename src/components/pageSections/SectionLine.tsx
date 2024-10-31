import { Box, Typography } from "@mui/material";

type Props = {
  text: string;
  useWhiteStroke?: boolean;
};

const SectionLine = ({ text, useWhiteStroke}: Props) => {
  return (
    <Box
      sx={{
        position: "relative", // Enable absolute positioning for the first layer
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100vw",
        py: 5,
      }}
    >
      
      {/* <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Align precisely to center
          zIndex: 1, // Ensure it's above the main text layer
          fontWeight: {
            xs: 700,
            sm: 800,
            md: 900,
          },
          fontSize: {
            xs: "2rem",
            sm: "2rem",
            md: "4rem",
          },
          lineHeight: "0.5em",
          color: "#7089AC", // Solid color for the top layer
          whiteSpace: "nowrap",
      
          
        }}
      >
        {topLayerText}
      </Typography> */}

      {/* Main Text Layer with Stroke */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: {
            xs: 700,
            sm: 800,
            md: 900,
          },
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "5rem",
          },
          lineHeight: "1em",
          color: "transparent", // Transparent fill to only show the stroke
          WebkitTextStroke: `1px ${useWhiteStroke ? "#ffffff" : "#d3d3d3"}`, // Outline color
          textTransform: "uppercase",
          //padding: "30px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionLine;
