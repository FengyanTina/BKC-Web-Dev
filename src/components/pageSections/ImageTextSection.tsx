import { Box, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./imageText.css";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import ImageGallary from "../imageManagements/ImageGallary";
import PageTextPart from "../cards/PageText";

const ImgTextSection = ({
  inforSectionId,
  title,
  subtitle,
  description,
  images,
  linkSubtitle,
  imageLeft = true,
}: ImageInforSectionModel) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Adjust `imageLeft` only if it's true on small screens
  const adjustedImageLeft = isSmallScreen || imageLeft;

  const renderImage = () => {
    if (Array.isArray(images)) {
      return <ImageGallary itemData={images.map((img) => ({ img: img }))} />;
    }

    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          px: 3,
        }}
      >
        <img src={images} className="image-responsive" alt="" />
      </Box>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, width: { md: "70%", sm: "100%" } }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 1, sm: 12, md: 12 }}
      >
        {adjustedImageLeft ? (
          <>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            
                {renderImage()}
             
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
                mt: {
                  xs: "30px",
                  sm: "30px",
                  md: "0px",
                },
              }}
            >
              {PageTextPart({
                id: inforSectionId,
                title,
                subtitle,
                description,
                linkSubtitle,
              })}
            </Grid>
          </>
        ) : (
          <>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              {PageTextPart({
                id: inforSectionId,
                title,
                subtitle,
                description,
                linkSubtitle,
              })}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>{renderImage()}</Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ImgTextSection;
