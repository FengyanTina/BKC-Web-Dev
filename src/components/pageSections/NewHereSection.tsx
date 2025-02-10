import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { ImageInforSectionModel } from "../../models/ImageInforSection";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function NewHereSectionGrid({
  title,
  description,
  images,
  subtitle,
  links,
}: ImageInforSectionModel) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundImage: `url(${images})`,

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
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
          color: "#CED9E5",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: {
              xs: 400,
              sm: 500,
            },
            fontSize: {
              lg: "38px",
              md: "30px",
              sm: "30px",
              xs: "28px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: "10px",
            fontWeight: {
              xs: 300,
              sm: 400,
            },
            fontSize: {
              lg: "30px",
              md: "22px",
              sm: "22px",
              xs: "20px",
            },
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
            fontSize: {
              lg: "25px",
              md: "20px",
              sm: "20px",
              xs: "18px",
            },
            color: "#CED9E5",
            textShadow: "2px 2px 4px rgba(0,0,0,1)",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "0px",
            paddingTop: "20px",
            paddingBottom: "20px",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: {
              lg: "25px",
              md: "20px",
              sm: "20px",
              xs: "18px",
            },
            color: "#202A44",
            display: "flex", // Ensure flexbox is used
            flexDirection: "column", // Stack items vertically
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            {links &&
              links.map((link, index) => (
                <div key={index}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "left",
                      fontSize: "18px",
                      lineHeight: 1.5,
                      color: "#CED9E5",
                    }}
                  >
                    {link.url.includes("#") ? (
                      <HashLink
                        style={{
                          color: "#CED9E5",
                          fontSize: "18px",
                          fontWeight: "800",
                          textDecoration: "none",
                          display: "flex", // Ensures alignment
                          alignItems: "center",
                        }}
                        smooth
                        to={link.url}
                      >
                        <ChevronRightIcon
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            marginRight: "8px",
                            color: "#CED9E5",
                          }} // Customize icon size and spacing
                        />
                        {link.label}
                      </HashLink>
                    ) : (
                      <a
                        href={link.url}
                        style={{
                          color: "#CED9E5",
                          textDecoration: "none",
                          fontWeight: "bold",
                          display: "flex", // Ensures alignment of icon and text
                          alignItems: "center",
                        }}
                      >
                        <ChevronRightIcon
                          sx={{
                            fontSize: "18px",
                            marginRight: "8px",
                            color: "#CED9E5",
                          }} // Customize icon size and spacing
                        />
                        {link.label}
                      </a>
                    )}
                  </Typography>
                </div>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
