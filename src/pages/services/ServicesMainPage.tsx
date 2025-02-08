import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import worshipHands from "../../assets/worshipHands.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  prayerService,
  baptismService,
  sundayServiceSection,
  findYourVision,
} from "../../data.ts";
import { SocialIcon } from "react-social-icons";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import MyMap from "../../apis/GoogleMap.tsx";
import TopImageSectionCard from "../../components/cards/customizedCards/TopImageSectionCard.tsx";
import  ImageInforCardSection from "../../components/pageSections/ImageInforCardSection.tsx";

export default function ServicesMainPage() {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B365D",
        minHeight: "100vh",
        flexGrow: 1,
        
      }}
    >
      {/* --------------SundayService First Section----------- */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${worshipHands})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "flex-end", sm: "center", xs: "center" },
          width: "100%", // Full width of the container
          height: "100vh", // Full viewport height
          backgroundAttachment: "fixed",
        }}
      >
        <Grid size={{ xs: 6, md: 10 }}>
          <Typography variant="h3" sx={{ color: "white" }}>
            Sunday services
          </Typography>
          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Sunday 11:00-13:00
          </Typography>
          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Albanoliden 5, vån 3, 50630 Borås{" "}
            <FaMapMarkerAlt
              onClick={handleOpenMap}
              style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
            />
          </Typography>

          {/* Open Google Map component */}
          <Dialog
            open={openMap}
            onClose={handleCloseMap}
            maxWidth="md"
            fullWidth
            style={{ color: "white", textDecoration: "none" }}
          >
            <DialogContent>
              <MyMap />
            </DialogContent>
          </Dialog>

          <Typography variant="h6" sx={{ color: "white", marginTop: "10px" }}>
            Live: Sunday 11:00 on Youtube
          </Typography>
          {/* <LiveService /> */}
          <Typography variant="h6" sx={{ color: "white", marginTop: "20px" }}>
            <a
              href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              style={{ color: "white" }}
            >
              {" "}
              Check All Services{" "}
            </a>
            <SocialIcon
              url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              network="youtube"
              style={{ height: 25, width: 25 }}
            />
          </Typography>
        </Grid>
      </Grid>
      {/* -------------FindYourVision----------- */}
      <div id="serve"></div>
      <SectionLine text="hitta din vision" />
      <Box
      sx={{
      
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        px:3,
      }}>

      <TopImageSectionCard
        id={findYourVision.id}
        title={findYourVision.title}
        subtitle={findYourVision.subtitle}
        description={findYourVision.description}
        images={findYourVision.images}
        links={findYourVision.links}
        
      />
      </Box>

      {/* --------------SundayService ----------- */}
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        px: 3, // Ensure this padding is applied correctly
        width: "100%",
      }}>
      <div id="sundayService"></div>
      <SectionLine text="Söndagsgudstjänst" />
      < ImageInforCardSection
        inforSectionId=""
        start={sundayServiceSection.start}
        end={sundayServiceSection.end}
        location={sundayServiceSection.location}
        id={sundayServiceSection.id}
        title={sundayServiceSection.title}
        subtitle={sundayServiceSection.subtitle}
        description={sundayServiceSection.description}
        images={sundayServiceSection.images}
        category={""}
        imageLeft={false}
        links={sundayServiceSection.links}
        maxLines={4}
      />

      {/* --------------PrayerService ----------- */}
  
      <div id="prayerService"></div>
      <SectionLine text="Bönetjänster" />
      < ImageInforCardSection
        inforSectionId=""
        id={prayerService.id}
        title={prayerService.title}
        subtitle={prayerService.subtitle}
        description={prayerService.description}
        images={prayerService.images}
        category={""}
        links={prayerService.links}
      />
 
      {/* -------------BaptismService----------- */}
  
      <SectionLine text="Doptjänster" />
      <div id="baptismService"></div>

      < ImageInforCardSection
        inforSectionId=""
        id={baptismService.id}
        title={baptismService.title}
        subtitle={baptismService.subtitle}
        description={baptismService.description}
        images={baptismService.images}
        category={""}
        imageLeft={false}
       
        links={baptismService.links}
      />
 
      {/*******YoutubeVideoLink***********/}
      <SectionLine text="Servicevideor" />

      {/* <YouTubePlaylists/>     */}
      <Box sx={{ marginBottom: "40px", marginTop: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#CED9E5",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <a style={{color:"#CED9E5"}} href="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter">
            {" "}
            Check Our Preachings on Youtube{" "}
          </a>{" "}
          <SocialIcon
            url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
            network="youtube"
            style={{ height: 30, width: 30 }}
          />
        </Typography>
        </Box>
      </Box>
    </Box>
  );
}
