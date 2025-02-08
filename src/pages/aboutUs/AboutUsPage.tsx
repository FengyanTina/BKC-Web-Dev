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
        backgroundColor: "#7089AC",
        px: 3,
       
      }}
    >
      
       
        <SectionLine text="Vår Vision" />
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
      <SectionLine text="Vår Historia" />
        <TopImageSectionCard
          id={ourHistory.id}
          title={ourHistory.title}
          description={ourHistory.description}
          images={ourHistory.images}
         
        />
      <SectionLine text="Vår team" />
      <ImageInforCardSection
          inforSectionId=""
          id={Pastor.id}
          title={Pastor.title}
          subtitle={Pastor.subtitle}
          description={Pastor.description}
          images={Pastor.images}
          category={""}
          //   buttonLink={"/activities#sundaySchool"}
        maxLines={11}
        />
      {/* <SectionLine text="Ledarskap" /> */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: {
            md: "row",
            sm: "column",
            xs: "column",
          },
          gap: "50px",
        }}
        id="leaderShip"
      >
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={DavidB}
        />
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={Leader}
        />
        <TeamIntroCard
          title={Pastor.title}
          subTitle={Pastor.subTitle}
          description={Pastor.content}
          image={DavidB}
        />
      </Box> */}
      {/* <SectionLine text="Medlemskap" />
      <Box id="userTable"></Box>
      <UserTable /> */}

     
    </Box>
  );
};

export default AboutUsPage;
