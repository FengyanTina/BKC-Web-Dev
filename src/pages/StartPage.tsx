import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import background from "../assets/sundaySchool/bkcWorship.jpg";
import { Link } from "react-router-dom";
import CurrentWeekEventCalendar from "../components/calendars/CurrentWeekEventCalendar";
import SectionLine from "../components/pageSections/SectionLine";
import {
  higlightEvents,
  newHere,
  news,
  socialMediaActivityCardInfor,
  activityCardInfor,
  sundayServiceCardInfor,
  scheduleCardInfor,
} from "../data";
import Carousel from "../components/slides/Carousel";
import NewHereSectionGrid from "../components/pageSections/NewHereSection";
import ImageInforCardSection from "../components/pageSections/ImageInforCardSection";
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
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: { xs: "60px", sm: "70px", md: "70px" },
          backgroundColor: "#CED9E5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center horizontally
            textAlign: "center", // Center text content
            marginBottom: { xs: "20px", sm: "40px", md: "40px" },
            marginTop: { xs: "60px", sm: "70px", md: "70px" },
          }}
        >
          <Link
            style={{
              color: "grey",
              textDecoration: "none",
              fontWeight: "800",
              fontSize: "20px",
            }}
            to="/contact"
          >
            Hitta Oss
          </Link>
          <Box>
            <FaMapMarkerAlt
              onClick={handleOpenMap}
              style={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
            />
          </Box>

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
      </Grid>

      <Box
        sx={{
          backgroundColor: "#CED9E5",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "45vh",
          ...(isSmallScreen
            ? {} // No backgroundImage for small screens
            : {
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }),
        }}
      >
        {isSmallScreen && (
          <img
            src={background}
            alt="background image"
            style={{
              width: "100%",
              height: "80%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          py: "30px",
          display: "flex",
          alignItems: "center", // Vertically centers the content
          justifyContent: "center",
          backgroundColor: "#CED9E5",
        }}
      >
        <CurrentWeekEventCalendar />
      </Box>

      {/* --------------Body----------- */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#dbe1e8",
        }}
      >
        {/* --------------COMMING EVENTS----------- */}

        <SectionLine text="veckans höjdpunkt" useWhiteStroke={true} />
        <Box sx={{ width: "90%" }}>
          <Carousel events={higlightEvents} />
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
        <ImageInforCardSection
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

        <ImageInforCardSection
          inforSectionId=""
          id={sundayServiceCardInfor.id}
          title={sundayServiceCardInfor.title}
          subtitle={sundayServiceCardInfor.subtitle}
          description={sundayServiceCardInfor.description}
          images={sundayServiceCardInfor.images}
          category={""}
          imageLeft={false}
          buttonLink="/services"
          buttonText={sundayServiceCardInfor.buttonText}
        />

        {/* --------------ACTIVITIES----------- */}
        <ImageInforCardSection
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
        <ImageInforCardSection
          inforSectionId=""
          id={scheduleCardInfor.id}
          title={scheduleCardInfor.title}
          subtitle={scheduleCardInfor.subtitle}
          description={scheduleCardInfor.description}
          images={scheduleCardInfor.images}
          category={""}
          imageLeft={false}
          buttonLink="/schedules"
          buttonText={scheduleCardInfor.buttonText}
        />
        {/* --------------ACTIVITIES-Groups----------- */}
        {/* <ImageInforCardSection
          id={homeGroupActivityCardInfor.id}
          inforSectionId=""
          title={homeGroupActivityCardInfor.title}
          subtitle={homeGroupActivityCardInfor.subtitle}
          description={homeGroupActivityCardInfor.description}
          images={homeGroupActivityCardInfor.images}
          category={""}
          buttonLink="/activities#otherGroups"
          buttonText={homeGroupActivityCardInfor.buttonText}
        /> */}
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
          <SlickSlider  />
        </Box>
      </Box>
    </Box>
  );
};
export default StartPage;
