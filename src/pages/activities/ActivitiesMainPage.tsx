import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import happySenior from "../../assets/happySenior.jpg";
import Woman from "../../assets/woman.jpg";
import Home from "../../assets/homeGroup.jpg";
import { BKCkYouth, BKCkIDS2, SundaySchoolImageGallary } from "../../data.ts";
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
        marginTop: {
          md: "130px",
          xs: "100px",
          px: 3,
          pb: 3,
        },
        backgroundColor: "#f0f4f8",
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
      <div id="sundaySchool"></div>
      <SectionLine text="BKC Barn" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f0f4f8",
          px: 3,
          pb: 3,
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              height: {
                xs: "200px",
                sm: "300px",
                md: "auto",
              },
              paddingRight: { sm: "10px" },
              paddingLeft: { sm: "10px", md: "100px" },
            }}
          >
            <SudaySchoolImageGallary imageData={SundaySchoolImageGallary} />
          </Grid>
          <Grid
            container
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              paddingRight: { sm: "10px", md: "100px" },
              paddingLeft: { sm: "10px" },
              marginTop: "30px",
            }}
          >
            <ImageInforSectionText
              id={BKCkIDS2.id}
              title={BKCkIDS2.title}
              subtitle={BKCkIDS2.subtitle}
              description={BKCkIDS2.description}
              startTime={BKCkIDS2.startTime}
              endTime={BKCkIDS2.endTime}
              location={BKCkIDS2.location}
              links={BKCkIDS2.links}
            />
          </Grid>
        </Grid>
      </Box>
      {/* --------------ACTIVITIES-BKC Youth----------- */}
      <div id="youth"></div>
      <SectionLine text="BKC Ung" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f0f4f8",
          px: 3,
          pb: 3,
        }}
      >
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
        <Grid
          size={12}
          sx={{
            paddingLeft: { sm: "10px", md: "100px" },
            paddingRight: { sm: "10px", md: "100px" },
          }}
        >
          <ImageInforSectionText
            id={BKCkYouth.id}
            title={BKCkYouth.title}
            subtitle={BKCkYouth.subtitle}
            description={BKCkYouth.description}
            startTime={BKCkYouth.startTime}
            location={BKCkYouth.location}
          />
        </Grid>
      </Box>
      {/* --------------ACTIVITIES-ACTIVITIES-BKC Other Groups----------- */}
      <div id="otherGroups"></div>
      <SectionLine text="Andra Gruper" />

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
          gap: "50px",
          px: 3,
        }}
      >
        <TeamIntroCard
          title={"Home Group"}
          subTitle={"Your Small Community"}
          description={"You can find your own small comminity..."}
          image={Home}
        />
        <TeamIntroCard
          title={"Senior Group"}
          subTitle={"Your Small Community"}
          description={"You can find your own small comminity..."}
          image={happySenior}
        />
        <TeamIntroCard
          title={"Woman Group"}
          subTitle={"Your Small Community"}
          description={"You can find your own small comminity..."}
          image={Woman}
        />
      </Box>
      {/* --------------ACTIVITIES-ACTIVITIES-Other Activities----------- */}

      <Box />
      <Box />
    </Box>
  );
}
