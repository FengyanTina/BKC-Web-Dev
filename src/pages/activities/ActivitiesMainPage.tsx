import Grid from "@mui/material/Grid2";
import { Box, Container } from "@mui/material";
import happySenior from "../../assets/happySenior.jpg";
import Woman from "../../assets/woman.jpg";
import Home from "../../assets/homeGroup.jpg";
import { BKCkYouth, BKCkIDS2, SundaySchoolImageGallary, homeGroup, seniorgroup, womangroup } from "../../data.ts";
import SudaySchoolImageGallary from "../../components/imageManagements/ImageGallaryWithColsRows.tsx";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import videoFile from "../../assets/istockphoto-987329642-640_adpp_is.mp4";
import TeamIntroCard from "../../components/cards/TeamIntroCard.tsx";
import ImageInforSectionText from "../../components/cards/ImageInforSectionText.tsx";
import InstagramEmbed from "../../components/instagram/InstagramEmbed.tsx";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function ActivitiesMainPage() {
  const [hasInstagramContent, setHasInstagramContent] = useState(false);
  return (
    <Box
      sx={{
        paddingTop: {
          md: "130px",
          xs: "100px",
        },
        pb: 3,
        backgroundColor: "#7089AC",
        display: "flex",
        alignItems: "center", // Allow items to stretch and fill the container height{/* Updated */
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div id="groups"></div>

      {!hasInstagramContent && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            paddingTop: "10px",
            paddingLeft: "10px",
          }}
        >
          <SocialIcon
            url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
            network="youtube"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            url="https://www.instagram.com/boraskristnacenter/"
            network="instagram"
            style={{ height: 25, width: 25 }}
          />

          <SocialIcon
            url="https://www.facebook.com/BorasKristnaCenter/?locale=sv_SE"
            network="facebook"
            style={{ height: 25, width: 25 }}
          />
        </Box>
      )}
      <InstagramEmbed setHasContent={setHasInstagramContent} />

      {/* <Box
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f0f4f8",
         
        }}
      > 
          <SlickSlider events={news} />
      </Box> */}
      {/* --------------ACTIVITIES-BKC Kids----------- */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center", // Allow items to stretch and fill the container height{/* Updated */}
          //   alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="lg">
          <div id="sundaySchool"></div>
          <SectionLine text="BKC Barn" useWhiteStroke={true} />
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{
                height: {
                  xs: "200px",
                  sm: "300px",
                  md: "auto",
                },
              }}
            >
              <SudaySchoolImageGallary imageData={SundaySchoolImageGallary} />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <ImageInforSectionText {...BKCkIDS2} />
            </Grid>
          </Grid>
        </Container>
        {/* --------------ACTIVITIES-BKC Youth----------- */}
        <div id="youth"></div>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#1B365D",
            px: 3,
            pb: {
              xs: 0,
              sm: 0,
              md: 3,
              lg: 3,
            },
          }}
        >
          <SectionLine text="BKC Ung" useWhiteStroke={true} />
          <Grid
            container
            spacing={1}
            sx={{
              flexDirection: "column",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
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
              }}
            >
              <video
                src={videoFile} // Use the imported video file
                controls
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></video>
            </Box>
          </Grid>
          {/* Aligned Text Section */}
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <ImageInforSectionText
                  id={BKCkYouth.id}
                  title={BKCkYouth.title}
                  subtitle={BKCkYouth.subtitle}
                  description={BKCkYouth.description}
                  start={BKCkYouth.start}
                  location={BKCkYouth.location}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* --------------ACTIVITIES-ACTIVITIES-BKC Other Groups----------- */}
        <div id="otherGroups"></div>
        <SectionLine text="Andra Gruper" useWhiteStroke={true} />

        <Box
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
            gap: {
              xs: 1,
              sm: 1,
              md: 3,
              lg: 5,
            },
            px: 3,
            pb: {
              xs: 1,
              sm: 1,
              md: 3,
              lg: 5,
            },
          }}
        >
          <TeamIntroCard
          id={homeGroup.id}
          inforSectionId=""
            title={homeGroup.title}
            subtitle={homeGroup.subtitle}
            description={homeGroup.description}
            images={homeGroup.images}
            buttonText={homeGroup.buttonText}
          />
          <TeamIntroCard
          id={seniorgroup.id}
          inforSectionId={seniorgroup.inforSectionId}
            title={seniorgroup.title}
            subtitle={seniorgroup.subtitle}
            description={seniorgroup.description}
            images={seniorgroup.images}
            buttonText={homeGroup.buttonText}
          />
          <TeamIntroCard
          id={womangroup.id}
          inforSectionId={womangroup.inforSectionId}
            title={womangroup.title}
            subtitle={womangroup.subtitle}
            description={womangroup.description}
            images={womangroup.images}
            buttonText={homeGroup.buttonText}
          />
        </Box>

        <Box />
        <Box />
      </Box>
    </Box>
  );
}
