import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../imageManagements/ImageGallary";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import ImageInforSectionText from "../cards/ImageInforSectionText";

const ImageInforCardSection = ({
  inforSectionId,
  title,
  category,
  startTime,
  location,
  subtitle,
  description,
  images,
  imageLeft = true,
  buttonLink,
  buttonText,
  links,
  showSocialIcons = false,
}: ImageInforSectionModel) => {
  const renderImageGallery = () => {
    if (Array.isArray(images)) {
      return (
        <ImageGallary
          itemData={images
            .filter((img): img is string => typeof img === "string") // Ensure img is a string
            .map((img) => ({ img }))}
          showAllAsFeatured={true}
        />
      );
    }

    return (
      <img
        src={images}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt=""
      />
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
        px: 3,
        pb: {
            xs:0,
            sm:0,
            md:3,
            lg:3,
        }
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: imageLeft ? "row-reverse" : "row",
          },
          maxWidth: 1200,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Updated */}
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            minHeight: { sm: "auto", md: 300, lg: 350 },
            maxHeight: { xs: "auto", sm: "none", md: 400, lg: 450 },
            width: "100%",
          }}
        >
          <ImageInforSectionText
            id={inforSectionId}
            category={category}
            title={title}
            startTime={startTime}
            location={location}
            subtitle={subtitle}
            description={description}
            buttonText={buttonText}
            buttonLink={buttonLink}
            showSocialIcons={showSocialIcons}
            links={links}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            minHeight: { xs: "auto", sm: 200, md: 250, lg: 350 },
            maxHeight: { xs: "auto", sm: 350, md: 400, lg: 450 },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "800px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {renderImageGallery()}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageInforCardSection;
