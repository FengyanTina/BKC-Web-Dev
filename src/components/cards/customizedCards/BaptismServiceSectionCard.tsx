import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./customizedCards.css";
import Grid from "@mui/material/Grid2";
import { BaptismSectionModel } from "../../../models/BaptismSecionModel";
import ImageGallary from "../../imageManagements/ImageGallary";

const BaptismServiceSectionCard = ({
  title,
  subtitle,
  images,
  steps,
  showAllAsFeatured = false,
}: BaptismSectionModel) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const renderImage = () => (
    <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ px: 3 }}>
      <Box>
        {Array.isArray(images) ? (
          <ImageGallary
            itemData={images.map((img) => ({ img: img }))}
            showAllAsFeatured={showAllAsFeatured}
          />
        ) : (
          <img src={images} className="image-responsive" alt="" />
        )}
      </Box>
    </Grid>
  );
  const renderText = () => (
    <Grid
      size={{ xs: 12, sm: 12, md: 6 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        px: 3,
        mt: "30px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mx: "auto",

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
            textAlign: "center",
            mx: "auto",

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
                      lg: "25px",
                      md: "20px",
                      sm: "20px",
                      xs: "18px",
                    },
                    lineHeight: 1.5,
                    mb: 1,
                  }}
                >
                  {step.link && step.linkName ? (
                    <>
                      <a
                        href={step.link}
                        style={{
                          color: "#337f83",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        {step.linkName}
                      </a>{" "}
                    </>
                  ) : (
                    step.description
                  )}
                </Typography>
              </div>
            ))}
        </Box>
      </Box>
    </Grid>
  );

  return (
    <Box sx={{ flexGrow: 1, width: { md: "70%", sm: "100%" } }}>
      <Grid container columns={{ xs: 1, sm: 12, md: 12 }}>
        {isSmallScreen ? (
          // If small screen, image on the left
          <>
            {renderImage()}
            {renderText()}
          </>
        ) : (
          // If not small screen, image on the right
          <>
            {renderImage()}
            {renderText()}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default BaptismServiceSectionCard;
