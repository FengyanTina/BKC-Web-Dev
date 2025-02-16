import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import background from "../assets/sundaySchool/bkcWorship.jpg";
import smallSreenBackImg from "../assets/smallSreenBackImg.jpg";
import { Link } from "react-router-dom";
import CurrentWeekEventCalendar from "../components/calendars/CurrentWeekEventCalendar";
import SectionLine from "../components/pageSections/SectionLine";
import {
  higlightEvents,
  socialMediaActivityCardInfor,
  activityCardInfor,
  servicesCardInfor,
  scheduleCardInfor,
  newHere1,
} from "../data";
import Carousel from "../components/slides/Carousel";
import NewHereSectionGrid from "../components/pageSections/NewHereSection";
import ImageInforCardSection from "../components/pageSections/ImageInforCardSection";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import MyMap from "../apis/GoogleMap";
import CloseIcon from "@mui/icons-material/Close";
import InstagramEmbed from "../components/instagram/InstagramEmbed";

const StartPage = () => {
  const [openMap, setOpenMap] = useState(false);
  const [hasInstagramContent, setHasInstagramContent] = useState(false);
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
          paddingTop: { xs: "60px", sm: "70px", md: "70px" },
          backgroundColor: "#1B365D", //#7089AC  #CED9E5
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center horizontally
            textAlign: "center", // Center text content
            marginBottom: { xs: "20px", sm: "40px", md: "40px" },
            paddingTop: { xs: "60px", sm: "70px", md: "70px" },
          }}
        >
          <Link
            style={{
              color: "#CED9E5", //#202A44
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
          backgroundColor: "#1B365D", //#CED9E5
          display: "flex",
          alignItems: "center",
          width: "100%",

          ...(isSmallScreen
            ? {} // No backgroundImage for small screens
            : {
                height: "45vh",
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
            src={smallSreenBackImg}
            alt="background image"
            style={{
              width: "100%",
              height: "60%",
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
          backgroundColor: "#1B365D", //#CED9E5
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
          backgroundColor: "#1B365D", //#dbe1e8
        }}
      >
        {/* --------------COMMING EVENTS----------- */}

        <SectionLine text="veckans höjdpunkt" useWhiteStroke={true} />
        <Box sx={{ width: "90%" }}>
          <Carousel events={higlightEvents} />
        </Box>

        {/* --------------WELCOME NEW----------- */}
        <Box sx={{ backgroundColor: "#7089AC" }}>
          <SectionLine text="Välkomna" useWhiteStroke={true} />
          <NewHereSectionGrid
            inforSectionId=""
            id={newHere1.id}
            title={newHere1.title}
            description={newHere1.description}
            images={newHere1.images}
            subtitle={newHere1.subtitle}
            links={newHere1.links}
          />
        </Box>
      </Box>
      {/* --------------ACTIVITIES and Services----------- */}
      {/* #dbe1e8*/}
      <Box sx={{ backgroundColor: "#1B365D", px: 3, paddingBottom: "10px", paddingTop: "15px"}}>
        {/* <SectionLine text=" Aktiviteter " useWhiteStroke={true} /> */}
        <ImageInforCardSection
          inforSectionId=""
          id={socialMediaActivityCardInfor.id}
          title={socialMediaActivityCardInfor.title}
          subtitle={socialMediaActivityCardInfor.subtitle}
          description={socialMediaActivityCardInfor.description}
          images={socialMediaActivityCardInfor.images}
          category={socialMediaActivityCardInfor.category}
          buttonText={socialMediaActivityCardInfor.buttonText}
          showSocialIcons={true}
        />

        {/* --------------SERVICES----------- */}

        <ImageInforCardSection
          inforSectionId=""
          id={servicesCardInfor.id}
          title={servicesCardInfor.title}
          subtitle={servicesCardInfor.subtitle}
          description={servicesCardInfor.description}
          images={servicesCardInfor.images}
          category={""}
          imageLeft={false}
          links={servicesCardInfor.links}
          buttonText={servicesCardInfor.buttonText}
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
          links={activityCardInfor.links}
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
          buttonText={scheduleCardInfor.buttonText}
          links={scheduleCardInfor.links}
        />
      </Box>
      {/* --------------NEWS SLIDES/Instagram Activities----------- */}

      {hasInstagramContent && (
        <Box sx={{ backgroundColor: "#7089AC" }}>
          <SectionLine text="Instagram Aktivitet" useWhiteStroke={true} />
        </Box>
      )}
      <InstagramEmbed setHasContent={setHasInstagramContent} />
    </Box>
  );
};
export default StartPage;
