
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Worship from "../assets/Worship.jpeg";
import { Link } from "react-router-dom";


const StartPage = () =>{


  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${Worship})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%", // Full width of the container
          height: "100vh", // Full viewport height
          backgroundAttachment: "fixed",
        }}
      >
        {/* Link Section */}
        <Grid
          size={{ xs: 12, sm: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& a": {
              position: "relative",
              paddingLeft: "20px", // Space for the vertical line
              marginBottom: "30px", // Space between the links
              textDecoration: "none", // No underline
              color: "black",
              fontSize: {
                xs: "1rem", // Smaller font size for small screens (mobile devices)
                sm: "1.5rem", // Default font size for larger screens (tablets and up)
              }, // Adjust font size
            },
            "& a::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "50%",
              width: "5px", // Vertical line width
              height: "100%", // Vertical line height
              backgroundColor: "purple", // Line color
              transform: "translateY(-50%)", // Center line vertically
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center horizontally
              textAlign: "center", // Center text content
              position: "relative", // To move the box up
              top: { sm: "-30px" },
            }}
          >
            {/* First Typography - Borås Kristna Center */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: {
                  xs: 700, // Lighter font weight for small screens (mobile devices)
                  sm: 900, // Default font weight for larger screens
                },
                fontSize: {
                  xs: "2rem", // Smaller font size for small screens (mobile devices)
                  sm: "5rem", // Default font size for larger screens (tablets and up)
                },
                lineHeight: {
                  xs: "0.5em", // Smaller font size for small screens (mobile devices)

                  sm: "1em", // Default font size for larger screens (tablets and up)
                },
                color: "white",

                marginBottom: "30px",
              }}
            >
              Borås Kristna Center
            </Typography>

            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align links to the left
                textAlign: "left", // Ensure text aligns left
                width: "100%", // Take full width so alignment works properly
                maxWidth: "400px", // You can adjust max width for better control
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  lineHeight: "1.5em",
                  color: "transparent",
                  WebkitTextStroke: "2px #ffffff",
                  textTransform: "uppercase",

                  marginBottom: "50px",
                  fontSize: {
                    xs: "1rem", // Smaller font size for small screens (mobile devices)
                    sm: "1.5rem", // Default font size for larger screens (tablets and up)
                  },
                }}
              >
                A place to worship
                <br />
                A place to pray
                <br />A place to learn the word
              </Typography>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                About Us
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact"
              >
                Find Us
              </Link>
              {/* Find Us link with onClick */}
            

            </Box>
          </Box>
        </Grid>

        <Grid
          sx={{
            marginRight: "0",
            marginTop: {
              xs: "10px", // Apply 10px margin on small screens (mobile devices)
              sm: "340px", // Apply 350px margin on larger screens (tablets and up)
            },
            height: {
              xs: "40vh", // Set height to 40% of the viewport height for small screens
              sm: "50vh", // 50% of viewport height for medium screens
              md: "50vh", // Default height for larger screens
              lg: "60vh",
            },
            marginBottom: {
              md: "10px",
            },
            overflowY: "auto",
          }}
          size={{ xs: 12, sm: 3, md: 2 }}
        >
       
        </Grid>
      </Grid>
      {/* --------------Body----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "30px",
          backgroundColor: "#dbe1e8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "30px",
        }}
      >
          
        </Box>
      </Box>

  );
}
export default StartPage