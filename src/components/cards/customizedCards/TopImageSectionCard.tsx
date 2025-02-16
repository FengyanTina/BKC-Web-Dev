import { Box, useMediaQuery, useTheme } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import ImageInforSectionText from "../ImageInforSectionText";
import { ImageInforSectionModel } from "../../../models/ImageInforSection";

const TopImageSectionCard = ({
  id,
  title,
  subtitle,
  description,
  links,
  buttonLink,
  buttonText,
  images,
}: ImageInforSectionModel) => {
  const theme = useTheme();
  const isSmallOrMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        
       width:"100%",
        pb: {
          xs: 2,
          sm: 2,
          md: 3,
          lg: 3,
        },
        display: "flex",
        alignItems: "center", // Allow items to stretch and fill the container height{/* Updated */}
        //   alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={{ md: 1 }} columns={{ xs: 1, sm: 12, md: 12 }}>
        {!isSmallOrMediumScreen && images && images.length > 0 &&(
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
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
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

            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
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

        {isSmallOrMediumScreen && images && images.length > 0 &&(
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
          <ImageInforSectionText
            id={id}
            title={title}
            subtitle={subtitle}
            description={description}
            category={""}
            buttonLink={buttonLink}
            buttonText={buttonText}
            links={links}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopImageSectionCard;
