import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import videoFile from "../../assets/istockphoto-987329642-640_adpp_is.mp4";
export default function NewHereSectionGrid({
  title,
  description,
  images,
  subtitle,
}: ImageInforSectionModel) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${images})`,
        backgroundColor:"#CED9E5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "auto",
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:{
            xs:"column",
            md:"row"
        }
      }}
    >
         <Box
              sx={{
                width: "100%", // Ensure the container takes full width
                maxWidth: "640px", // Maximum width for large screens
                position: "relative",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                alignContent:"center",
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
    
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
            
        <Typography
          variant="h3"
          sx={{
            marginTop: "0px",
            paddingTop: "0px",
            fontWeight: "500",
            color: "#1B365D",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: "10px",
            fontWeight: "500",
            color: "#1B365D",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
            fontWeight: "600",
            color: "#1B365D",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "0px",
           // backdropFilter: "blur(5px)",
            //backgroundColor: "rgba(255, 255, 255, 0.4)",
            paddingTop: "40px",
            paddingBottom: "40px",
            marginBottom: "60px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <HashLink
            to="/services#sundayService"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            SundayService
          </HashLink>
          <HashLink
            to="/services#serve"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            Connect To Your Purpose
          </HashLink>
          <HashLink
            to="/activities#groups"
            style={{
              display: "block",
              fontSize: "25px",
              color: "black",
              fontWeight: "500",
            }}
          >
            For Your Family
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
}
