import { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ourHistory, ourVision, Pastor } from "../../data";
import ReadMoreDialogs from "../../components/forms/ReadMoreDialog";
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
        paddingBottom: "50px",
        backgroundColor: "#7089AC",
        px: 3,
        display: "flex",
        alignItems: "center", // Allow items to stretch and fill the container height{/* Updated */}
        //   alignItems: "center",
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
      />
      <SectionLine text="Vår Historia" useWhiteStroke={true} />
      <TopImageSectionCard
        id={ourHistory.id}
        title={ourHistory.title}
        description={ourHistory.description}
        images={ourHistory.images}
      />
    
        <SectionLine text="Vår team" useWhiteStroke={true} />
        <ImageInforCardSection
          inforSectionId=""
          id={Pastor.id}
          title={Pastor.title}
          subtitle={Pastor.subtitle}
          description={Pastor.description}
          images={Pastor.images}
          category={""}
          maxLines={11}
        />
     
    
      {/* <SectionLine text="Medlemskap" />
      <Box id="userTable"></Box>
      <UserTable /> */}
    </Box>
  );
};

export default AboutUsPage;
