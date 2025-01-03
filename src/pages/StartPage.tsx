import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import CurrentWeekEventCalendar from "../components/calendars/CurrentWeekEventCalendar";
import SectionLine from "../components/pageSections/SectionLine";
import {
  comingEvents,
  homeGroupActivityCardInfor,
  newHere,
  news,
  socialMediaActivityCardInfor,
  activityCardInfor,
  sundayServiceCardInfor,
  scheduleCardInfor
} from "../data";
import Carousel from "../components/slides/Carousel";
import NewHereSectionGrid from "../components/pageSections/NewHereSection";
import ImgInforCardSection from "../components/pageSections/ImgInforCardSection";
import SlickSlider from "../components/slides/SlickSlider";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import MyMap from "../apis/GoogleMap";
import CloseIcon from "@mui/icons-material/Close";

const StartPage = () => {
  const [openMap, setOpenMap] = useState(false);

  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Link Section */}
        <Grid
          size={{ xs: 12, sm: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            "& a": {
              position: "relative",
              paddingLeft: "20px", // Space for the vertical line
              marginBottom: "30px", // Space between the links
              textDecoration: "none", // No underline
              color: "black",
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
              },
            },
            "& a::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: "50%",
              width: "5px", // Vertical line width
              height: "100%", // Vertical line height
              backgroundColor: "#00acc1", // Line color
              transform: "translateY(-50%)", // Center line vertically
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center horizontally
              textAlign: "center", // Center text content
              position: "relative", // To move the box up
              marginTop: { xs: "100px", sm: "80px", md: "80px" },
            }}
          >
            {/* First Typography - Borås Kristna Center */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: {
                  xs: 700,
                  sm: 900,
                },
                fontSize: {
                  xs: "2rem",
                  sm: "5rem",
                },
                lineHeight: {
                  xs: "0.5em",
                  sm: "1em",
                },
                color: "white",
                marginBottom: "30px",
              }}
            >
              Välkommen
            </Typography>

            <Box
              sx={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
                width: "100%",
                maxWidth: {
                  md: "400px",
                  sm: "300px",
                  xs: "200px",
                },
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/aboutUs"
              >
                Vilka Är Vi?
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact"
              >
                Hitta Oss
              </Link>
              <FaMapMarkerAlt
                onClick={handleOpenMap}
                style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
              />

              {/* Open Google Map component */}
              <Dialog
                open={openMap}
                onClose={handleCloseMap}
                maxWidth="md"
                fullWidth
                style={{ color: "white", textDecoration: "none" }}
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleCloseMap}
                  aria-label="close"
                  style={{ position: "absolute", right: 30, top: 15 }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent>
                  <MyMap />
                </DialogContent>
              </Dialog>
            </Box>
          </Box>
        </Grid>

        <Grid
          sx={{
            maxWidth: "90%",
            marginTop: {
              sm: "30px",
              md: "355px",
            },
            height: {
              xs: "25vh",
              sm: "30vh",
              md: "40vh",
            },
            display: "flex",
            justifyContent: "flex-end",
          }}
          size={{ xs: 12, sm: 12, md: 3 }}
        >
          <CurrentWeekEventCalendar />
        </Grid>
      </Grid>

      {/* --------------Body----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          //gap: "20px",

          backgroundColor: "#dbe1e8",
        }}
      >
        {/* --------------COMMING EVENTS----------- */}

        <SectionLine text="Kommande Evenemang" useWhiteStroke={true} />
        <Box sx={{ width: "90%" }}>
          <Carousel events={comingEvents} />
        </Box>

        {/* --------------WELCOME NEW----------- */}
        <SectionLine text="Välkomna" useWhiteStroke={true} />
        <NewHereSectionGrid
          inforSectionId=""
          id={newHere.id}
          title={newHere.title}
          description={newHere.description}
          images={newHere.images}
          subtitle={newHere.subtitle}
        />
      </Box>
      {/* --------------ACTIVITIES and Services----------- */}

      <SectionLine text=" Aktiviteter och Tjänster" />
      <Box sx={{ backgroundColor: "#dbe1e8" }}>
        <ImgInforCardSection
          inforSectionId=""
          id={socialMediaActivityCardInfor.id}
          title={socialMediaActivityCardInfor.title}
          subtitle={socialMediaActivityCardInfor.subtitle}
          description={socialMediaActivityCardInfor.description}
          images={socialMediaActivityCardInfor.images}
          category={socialMediaActivityCardInfor.category}
          buttonLink={"/activities#groups"}
          showSocialIcons={true}
        />

        {/* --------------SERVICES----------- */}

        <ImgInforCardSection
          inforSectionId=""
          id={sundayServiceCardInfor.id}
          title={sundayServiceCardInfor.title}
          subtitle={sundayServiceCardInfor.subtitle}
          description={sundayServiceCardInfor.description}
          images={sundayServiceCardInfor.images}
          category={""}
          imageLeft={false}
        //   buttonLink={"/activities#youth"}
          buttonLink="/services"
          buttonText={sundayServiceCardInfor.buttonText}
        />

        {/* --------------ACTIVITIES----------- */}
        <ImgInforCardSection
          inforSectionId=""
          id={activityCardInfor.id}
          title={activityCardInfor.title}
          subtitle={activityCardInfor.subtitle}
          description={activityCardInfor.description}
          images={activityCardInfor.images}
          category={""}
        //   buttonLink={"/activities#sundaySchool"}
        buttonLink={"/activities"}
        buttonText={activityCardInfor.buttonText}
        />
         
       {/* --------------SCHEDULES----------- */}
       <ImgInforCardSection
          inforSectionId=""
          id={scheduleCardInfor.id}
          title={scheduleCardInfor.title}
          subtitle={scheduleCardInfor.subtitle}
          description={scheduleCardInfor.description}
          images={scheduleCardInfor.images}
          category={""}
          imageLeft={false}
        //   buttonLink={"/activities#youth"}
          buttonLink="/schedules"
          buttonText={scheduleCardInfor.buttonText}
        />
        {/* --------------ACTIVITIES-Groups----------- */}
        <ImgInforCardSection
          id={homeGroupActivityCardInfor.id}
          inforSectionId=""
          title={homeGroupActivityCardInfor.title}
          subtitle={homeGroupActivityCardInfor.subtitle}
          description={homeGroupActivityCardInfor.description}
          images={homeGroupActivityCardInfor.images}
          category={""}
          buttonLink="/activities#otherGroups"
          buttonText={homeGroupActivityCardInfor.buttonText}
        />
      </Box>
      {/* --------------NEWS SLIDES----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f0f4f8",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SectionLine text="Nyheter" />
        <Box
          sx={{
            backgroundColor: "#f0f4f8",
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <SlickSlider events={news} />
        </Box>
      </Box>
    </Box>
  );
};
export default StartPage;
