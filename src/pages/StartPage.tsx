import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import CurrentWeekEventCalendar from "../components/calendars/CurrentWeekEventCalendar";
import SectionLine from "../components/pageSections/SectionLine";
import { comingEvents, homeGroupActivityCardInfor, newHere, news, socialMediaActivityCardInfor, sundaySchoolActivityCardInfor, sundayServiceCardInfor, youthActivityCardInfor } from "../data";
import Carousel from "../components/slides/Carousel";
import NewHereSectionGrid from "../components/pageSections/NewHereSection";
import ImgInforCardSection from "../components/pageSections/ImgInforCardSection";
import ActivitySocialMediaScetionCard from "../components/cards/customizedCards/ActivitySocialMediaScetionCard";
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
         height:"100%",
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
              marginTop: { xs: "100px",  },
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
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", 
                textAlign: "left", 
                width: "100%", 
                maxWidth: {
                    md:"400px",
                    sm:"300px",
                    xs:"200px",
                }
               
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  lineHeight: "1.5em",
                  color: "transparent",
                  WebkitTextStroke: "2px #ffffff",
                  textTransform: "uppercase",

                  marginBottom: "50px",
                  fontSize: {
                    xs: "1rem", 
                    sm: "1.5rem", 
                  },
                }}
              >
              </Typography>
              <Link style={{ color: "white", textDecoration: "none" }} to="/aboutUs">
                About Us
              </Link>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact"
              >
                Find Us
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
                  <MyMap/>
                </DialogContent>
              </Dialog>
            </Box>
          </Box>
        </Grid>

        <Grid
          sx={{
            maxWidth: "90%",
            marginTop: {
              xs: "20px", 
              sm: "50px", 
              md:"340px"
            },
            height: {
              xs: "45vh", 
              sm: "55vh", // 50% of viewport height for medium screens
              md: "auto", 
              
            },
            marginBottom: "10px",
            overflowY: "auto",
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
            gap: "20px",
            paddingTop: "30px",
            backgroundColor: "#dbe1e8",      
            marginBottom: "30px",
          }}
      >
        {/* --------------COMMING EVENTS----------- */}

        <SectionLine text="Kommande Evenemang" useWhiteStroke={true}/>
        <Box sx={{ width: "80%" }}>
          <Carousel events={comingEvents} />
        </Box>
    

       {/* --------------WELCOME NEW----------- */}
       <SectionLine text="Välkomna" useWhiteStroke={true}  />
        <NewHereSectionGrid
        inforSectionId=""
        id={newHere.id}
          title={newHere.title}
         description={newHere.description}
          images={newHere.images}
          subtitle={newHere.subtitle}
        />
      </Box>
     {/* --------------ACTIVITIES----------- */}

     <SectionLine text=" Aktiviteter och Tjänster"  />
     
      <ActivitySocialMediaScetionCard
      inforSectionId=""
      id={socialMediaActivityCardInfor.id}
        title={socialMediaActivityCardInfor.title}
        subtitle={socialMediaActivityCardInfor.subtitle}
        description={socialMediaActivityCardInfor.description}
        images={socialMediaActivityCardInfor.images}
        category={socialMediaActivityCardInfor.category}
        buttonLink={"/activities#groups"}
      />

      {/* --------------ACTIVITIES-Sunday Service----------- */}
      <Box sx={{backgroundColor:"#dbe1e8" }}>
      <ImgInforCardSection
      inforSectionId=""
      id={sundayServiceCardInfor.id}
        title={sundayServiceCardInfor.title}
        subtitle={sundayServiceCardInfor.subtitle}
        description={sundayServiceCardInfor.description}
        images={sundayServiceCardInfor.images}
        category={""}
        imageLeft={false}
        buttonLink={"/services#sundayService"}
      /></Box>

      {/* --------------ACTIVITIES-BKC Kids----------- */}
      <ImgInforCardSection
      inforSectionId=""
      id={sundaySchoolActivityCardInfor.id}
        title={sundaySchoolActivityCardInfor.title}
        subtitle={sundaySchoolActivityCardInfor.subtitle}
        description={sundaySchoolActivityCardInfor.description}
        images={sundaySchoolActivityCardInfor.images}
        category={""}
        buttonLink={"/activities#sundaySchool"}
        
      />
      {/* --------------ACTIVITIES-Youth----------- */}
      <ImgInforCardSection
      inforSectionId=""
      id={youthActivityCardInfor.id}
        title={youthActivityCardInfor.title}
        subtitle={youthActivityCardInfor.subtitle}
        description={youthActivityCardInfor.description}
        images={youthActivityCardInfor.images}
        category={""}
        imageLeft={false}
        buttonLink={"/activities#youth"}
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
        buttonLink={"/activities#otherGroups"}
      />
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
            marginBottom: "10px",
          }}
        > 
          <SlickSlider events={news} />
        </Box>
      </Box>
    </Box>
  );
};
export default StartPage;