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
        py:{
            xs:4,
            sm:4,
            md:8,
            lg:8,
        }
        
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: {
            xs: 700,
            sm: 800,
            md: 900,
          },
          fontSize: {
            xs: "1.8rem",
            sm: "2rem",
            md: "5rem",
          },
          lineHeight: "1em",
          color: "transparent", // Transparent fill to only show the stroke
          WebkitTextStroke: `1px ${useWhiteStroke ? "#CED9E5" : "#202A44"}`, // Outline color
          
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionLine;
