import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import { BaptismSectionModel } from "../../../models/BaptismSecionModel";
import sundaySchol11 from "../../../assets/sundaySchol11.jpg";
import serve1 from "../../../assets/serve1.png";
import socialActivity from "../../../assets/socialActivity.png";

// const Item = styled("div")(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   ...theme.applyStyles("dark", {}),
// }));

const WantServeSectionCard = ({
  title,
  subtitle,

  steps,
}: BaptismSectionModel) => {
  //   const imageCount = Array.isArray(images) ? images.length : 1; // Determine the number of images
  //   const hasLargeImage = imageCount > 2;
  const theme = useTheme();
  const isSmallOrMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1, width: { md: "70%", sm: "100%" } }}>
      <Grid container spacing={{ md: 1 }} columns={{ xs: 1, sm: 12, md: 12 }}>
        {!isSmallOrMediumScreen && (
          <>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Box
                sx={{
                  width: "100%", // Ensure the container takes full width
                  maxWidth: "460px", // Maximum width for large screens
                  position: "relative",
                  paddingTop: {
                    xs: "56.25%", // 16:9 aspect ratio for smaller screens
                    md: "30%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={sundaySchol11} // Use the imported image file
                  alt="Prayer Image" // Alt text for accessibility
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Optional: Maintain aspect ratio
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  width: "100%", // Ensure the container takes full width
                  maxWidth: "560px", // Maximum width for large screens
                  position: "relative",
                  paddingTop: {
                    xs: "56.25%", // 16:9 aspect ratio for smaller screens
                    md: "30%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={serve1} // Use the imported image file
                  alt="Prayer Image 2" // Alt text for accessibility
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Optional: Maintain aspect ratio
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}  >
              <Box
                sx={{
                  width: "100%", // Ensure the container takes full width
                  maxWidth: "460px", // Maximum width for large screens
                  position: "relative",
                  paddingTop: {
                    xs: "56.25%", // 16:9 aspect ratio for smaller screens
                    md: "30%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={socialActivity} // Use the imported image file
                  alt="Prayer Image 2" // Alt text for accessibility
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Optional: Maintain aspect ratio
                  }}
                />
              </Box>
            </Grid>
          </>
        )}

        {isSmallOrMediumScreen && (
          <>
            <Box
              sx={{
                width: "100%", // Ensure the container takes full width
                maxWidth: "640px", // Maximum width for large screens
                position: "relative",
                paddingTop: {
                  xs: "56.25%", // 16:9 aspect ratio for smaller screens
                  md: "30%", // Less padding for medium screens
                  lg: "20%", // Even less padding for large screens
                },
                marginBottom: "30px",
              }}
            >
              <img
                src={serve1} // Use the imported image file
                alt="Prayer Image 2" // Alt text for accessibility
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Optional: Maintain aspect ratio
                }}
              />
            </Box>
          </>
        )}
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
           marginTop:"30px"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mx: "auto",
              px: 3,
              marginBottom: "10px",
              fontSize: {
                lg: "40px",
                md: "30px",
                sm: "30px",
                xs: "28px",
              },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center", // Align the text to the center
                mx: "auto", // Horizontal margin to center it within the container
                px: 3, // Add padding on the sides
                mt: 3,
                fontSize: {
                  lg: "30px",
                  md: "22px",
                  sm: "22px",
                  xs: "20px",
                },
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Box
            sx={{
              maxHeight: {
                xs: "450px",
                sm: "500px",
                md: "550px",
                lg: "600px",
              },
              overflowY: "auto",
              marginTop: "10px",
            }}
          >
            <div>
              {steps &&
                steps.map((step, index) => (
                  <div key={index} style={{ marginBottom: "16px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          lg: "25px",
                          md: "20px",
                          sm: "20px",
                          xs: "18px",
                        },
                        lineHeight: 1.5,
                      }}
                    >
                      {step.link && step.linkName ? (
                        <>
                          <a
                            href={step.link}
                            style={{ color: "#337f83", textDecoration: "none",fontWeight: "bold" }}
                          >
                            {step.linkName}
                          </a>{" "}
                          {step.description} &nbsp; {/* Non-breaking space */}
                        </>
                      ) : (
                        step.description
                      )}
                    </Typography>
                  </div>
                ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WantServeSectionCard;