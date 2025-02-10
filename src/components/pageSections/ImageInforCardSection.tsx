import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallary from "../imageManagements/ImageGallary";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import ImageInforSectionText from "../cards/ImageInforSectionText";

const ImageInforCardSection = ({
  inforSectionId,
  title,
  category,
  start,
  end,
  location,
  subtitle,
  description,
  images,
  imageLeft = true,
  links,
  maxLines,
  showSocialIcons = false,
buttonText
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
        alignItems: "stretch", // Allow items to stretch and fill the container height{/* Updated */}
        justifyContent: "center",
        marginBottom:"20px"
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
          alignItems: "stretch", // Ensures both the image and text sections stretch{/* Updated */}
          justifyContent: "center",
          height: "100%", // Allow the Grid to fill the height{/* Updated */}
        }}
      >
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
            start={start}
            end={end}
            location={location}
            subtitle={subtitle}
            description={description}
            maxLines={maxLines}
            showSocialIcons={showSocialIcons}
            links={links}
            buttonText={buttonText}
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
