import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

import { ImageInforSectionModel } from "../../models/ImageInforSection";

export default function NewHereSectionGrid({
  title,
  description,
  images,
  subtitle,
}: ImageInforSectionModel) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${images})`, // Set the image as background
        backgroundSize: "cover", // Cover the entire area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Avoid repeating the image
        width: "100%",
        height: "auto",
        textAlign: "center",
        color: "white",
        display: "flex", // Use flex to center the content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        padding: "40px 20px",
      }}
    >
      <Box
        sx={{
           // Set a maximum width for the content
          width: "100%", // Make sure it scales for smaller screens
          textAlign: "center",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: "0px",
            paddingTop: "0px",
            fontWeight: "700",
            color: "#883b9b", // Muted reddish-purple that stands out on both black and white backgrounds
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            marginTop: "10px",
            fontWeight: "500",
            // color: "#883b9b", // Muted reddish-purple that stands out on both black and white backgrounds
            // textShadow: "2px 2px 4px rgba(0,0,0,1)",
            color: "#9b4eaf", // Slightly brighter muted reddish-purple that stands out on both black and white backgrounds
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: "600",
            // color: "#9b5de5", // Vivid purple that stands out on both black and white backgrounds
            // textShadow: "2px 2px 4px rgba(0,0,0,1.5)",
            color: "#9b4eaf", // Slightly brighter muted reddish-purple that stands out on both black and white backgrounds
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "0px",
            backdropFilter: "blur(5px)", // Apply a blur effect to the background
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            paddingTop: "40px",
            paddingBottom: "40px",
            marginBottom: "60px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1100px",
            marginLeft: "auto", // Automatically adjust left margin
            marginRight: "auto",
          }}
        >
              <HashLink
                to="/services#in-church"
                style={{
                  display: "block",
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                In Church
              </HashLink>
              <HashLink
                to="/services#serve"
                style={{
                  display: "block",
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                Connect To Your Purpose
              </HashLink>
              <HashLink
                to="/activities"
                style={{
                  display: "block",
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                For Your Family
              </HashLink>
        </Box>
      </Box>
    </Box>
  );
}
