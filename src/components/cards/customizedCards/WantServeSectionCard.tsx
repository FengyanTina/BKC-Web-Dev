import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import { TextSectionWithStepsModel } from "../../../models/BaptismSecionModel";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WantServeSectionCard = ({
  title,
  subtitle,
  description,
  steps,
  links,
  buttonLink,
  showStepsLink=true,
  images ,
}: TextSectionWithStepsModel) => {
  const theme = useTheme();
  const isSmallOrMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1, width: { lg: "70%", md: "100%", sm: "100%" } }}>
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
                    md: "50%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={images[0]} // Use the imported image file
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
                    md: "50%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={images[1]} // Use the imported image file
                  alt="Prayer Image 2" // Alt text for accessibility
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "460px",
                  position: "relative",
                  paddingTop: {
                    xs: "56.25%", // 16:9 aspect ratio for smaller screens
                    md: "50%", // Less padding for medium screens
                    lg: "50%", // Even less padding for large screens
                  },
                }}
              >
                <img
                  src={images[2]}
                  alt="Prayer Image 2"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img src={images[1]} className="image-responsive" alt="" />
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
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: "10px",
              fontSize: {
                lg: "25px",
                md: "25px",
                sm: "25px",
                xs: "25px",
              },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "20px",
                },
              }}
            >
              {subtitle}
            </Typography>
          )}
          <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          fontSize: "18px",
          lineHeight: 1.5,     
        }}
      >
        {description}
      </Typography>
          <Box
            sx={{
              maxHeight: {
                xs: "300px",
                sm: "500px",
                md: "550px",
                lg: "600px",
              },
              overflowY: "auto",
              marginTop: "10px",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
            }}
          >
            <Box>
              {steps &&
                steps.map((step, index) => (
                  <div key={index} style={{ marginBottom: "16px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "18px",
                          xs: "18px",
                        },
                        lineHeight: 1.5,
                      }}
                    >
                      {showStepsLink && step.link && step.linkName ? (
                        <>
                          <a
                            href={step.link}
                            style={{
                              color: "#337f83",
                              textDecoration: "none",
                              fontWeight: "bold",
                            }}
                          >
                            <ChevronRightIcon
                              sx={{
                                fontSize: "20px",
                                marginRight: "8px",
                                color: "#337f83",
                              }} // Customize icon size and spacing
                            />
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
            </Box>
            <Box>
        {links &&
          links.map((link, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "18px",
                    xs: "18px",
                  },
                  lineHeight: 1.5,
                }}
              >
                <a
                  href={link.url}
                  style={{
                    color: "#337f83",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  <ChevronRightIcon
                    sx={{
                      fontSize: "20px",
                      marginRight: "8px",
                      color: "#337f83",
                    }} // Customize icon size and spacing
                  />
                  {link.label}
                </a>
              </Typography>
            </div>
          ))}
      </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WantServeSectionCard;
