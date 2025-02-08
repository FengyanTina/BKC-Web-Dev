import { useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ourHistory, ourVision, Pastor } from "../../data";
import ReadMoreDialogs from "../../components/forms/ReadMoreDialog";
import TopImageSectionCard from "../../components/cards/customizedCards/TopImageSectionCard.tsx";
import SectionLine from "../../components/pageSections/SectionLine.tsx";
import ImageInforCardSection from "../../components/pageSections/ImageInforCardSection.tsx";

const AboutUsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

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
        pb: 3,
      }}
    >
        <Box
         sx={{
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}>
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
          buttonLink=""
          buttonText=""
        />
        
        </Box>
       
      <Box
        sx={{
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
         <SectionLine text="Vår Historia" />
        <TopImageSectionCard
          id={ourHistory.id}
          title={ourHistory.title}
          description={ourHistory.description}
          images={ourHistory.images}
          showStepsLink={false}
        />
      </Box>
      <Box
            sx={{
              marginTop: "20px",
              marginBottom: "50px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              color:"#CED9E5",
              overflow: "hidden",
              width: "100%",
            }}
          >
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
          buttonLink=""
          buttonText=""
        />
      {/* <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "90%", // Full width of the container change to 90%
          flexDirection: {
            md: "row",
            sm: "column",
          },
          marginBottom: "20px",
          flexGrow: "1",
        }}
      >
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center", // Center the image horizontally
            alignItems: "center", // Center the image vertically
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "450px",
              objectFit: "cover",
            }}
            src={Pastor.image}
            alt=""
          />
        </Grid> */}
        {/* <Grid
          sx={{
            width: "90%",
            maxHeight: 450,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            fontSize: {
              lg: "40px",
              md: "30px",
              sm: "30px",
              xs: "28px",
            },
            
            paddingRight: {
              lg: "100px",
              md: "30px",
            },
          }}
          size={{ xs: 12, sm: 12, md: 6 }}
          id="mainPastor"
        >
          <Typography
            sx={{
              marginTop: { xs: "20px", sm: "30px" },
              color:"#CED9E5",
              fontSize: {
                lg: "25px",
                md: "25px",
                sm: "25px",
                xs: "25px",
              },
            }}
            variant="h2"
          >
            {Pastor.title}
          </Typography>
          <Typography
            sx={{
              marginTop: "10px",
              color:"#CED9E5",
              fontSize: {
                lg: "20px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
            }}
            variant="h4"
          >
            {Pastor.subTitle}
          </Typography>
         */}
            {/* <Box
              sx={{
                height: "100%",
                maxHeight: {
                  xs: "300px",
                  sm: "500px",
                  md: "550px",
                  lg: "600px",
                },
                overflowY: "auto",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
              }}
            > */}
              {/* Directly using Box to prevent wrapping issues with Typography */}
              {/* {Pastor.content.split("\n").map((paragraph, index) => (
                <Box key={index} sx={{ display: "block", mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                    }}
                    variant="body1"
                  >
                    {paragraph}
                  </Typography>
                </Box>
              ))} */}
            {/* </Box> */}
          
          {/* <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1">
              <Link
                href="https://your-blog-link.com"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Visit Blog
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                Follow on Facebook
              </Link>
            </Typography>
          </Box> */}
          {/* <Box sx={{ marginTop: "30px" }}>
            <Typography variant="body1">
              <Link
                onClick={handleOpen}
                sx={{
                  cursor: "pointer",
                  color:"#CED9E5",
                  fontWeight: "800",
                  textDecoration: "underline",
                  fontSize: "18px",
                }}
                target="_blank"
                rel="noopener"
                // underline="hover"
              >
                Read More
              </Link>
            </Typography>
          </Box> */}
        {/* </Grid>
        <ReadMoreDialogs
          open={modalOpen}
          onClose={handleClose}
          title={Pastor.title}
          subtitle={Pastor.subTitle}
          content={Pastor.content}
        />
      </Grid> */}
      </Box>

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
