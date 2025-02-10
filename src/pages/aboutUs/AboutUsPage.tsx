import { useEffect } from "react";
import { Box } from "@mui/material";
import { ourHistory, ourVision, Pastor } from "../../data";
import TopImageSectionCard from "../../components/cards/customizedCards/TopImageSectionCard.tsx";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import ImageInforCardSection from "../../components/pageSections/ImageInforCardSection.tsx";

const AboutUsPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Jump directly to the target element's offset position
        const yOffset = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yOffset, behavior: "auto" }); // Use 'auto' for no smooth scrolling
      }
    }
  }, []);

  return (
    <Box
      sx={{
        paddingTop: {
          md: "130px",
          sm: "75px",
          xs: "60px",
        }, 
        backgroundColor: "#7089AC",
        px: 3,
        display: "flex",
        alignItems: "center", // Allow items to stretch and fill the container height{/* Updated */}
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <SectionLine text="Vår Vision" useWhiteStroke={true} />
      <ImageInforCardSection
        inforSectionId=""
        id={ourVision.id}
        title={ourVision.title}
        subtitle={ourVision.subtitle}
        description={ourVision.description}
        images={ourVision.images}
        category={""}
        imageLeft={false}
        maxLines={8}
        buttonText={ourVision.buttonText}
      />
      <SectionLine text="Vår Historia" useWhiteStroke={true} />
      <TopImageSectionCard
        id={ourHistory.id}
        title={ourHistory.title}
        description={ourHistory.description}
        images={ourHistory.images}
        buttonText={ourHistory.buttonText}
      />

      <SectionLine text="Vårt team" useWhiteStroke={true} />
      <ImageInforCardSection
        inforSectionId=""
        id={Pastor.id}
        title={Pastor.title}
        subtitle={Pastor.subtitle}
        description={Pastor.description}
        images={Pastor.images}
        category={""}
        maxLines={10}
        buttonText={Pastor.buttonText}
      />

      {/* <SectionLine text="Medlemskap" />
      <Box id="userTable"></Box>
      <UserTable /> */}
    </Box>
  );
};

export default AboutUsPage;
