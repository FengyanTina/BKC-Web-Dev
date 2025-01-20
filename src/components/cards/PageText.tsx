import { Box, Typography } from "@mui/material";
import { PageInforModel } from "../../models/PageInforModel";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PageTextPart = ({
  title,
  subtitle,
  description,
  linkSubtitle,
  startTime,
  endTime,
  location,
  buttonLink,
  links,
}: PageInforModel) => (
  <>
    <Typography
      variant="h3"
      sx={{       
        fontSize: {
            lg: "25px",
            md: "25px",
            sm: "25px",
            xs: "25px",
          },
      }}
    >
      {title}
    </Typography>
    {linkSubtitle && (
      <Typography
        variant="h4"
        sx={{
          marginBottom: "10px",
          fontSize: {
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },
        }}
      >
        <a
          href=""
          style={{ color: "#337f83", textDecoration: "none",fontWeight: "bold" }}
        >
          {linkSubtitle}
        </a>
      </Typography>
    )}
    {subtitle && (
      <Typography
        variant="h4"
        sx={{  
          marginBottom: "10px",
          fontSize: {
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },
        }}
      >
        {subtitle}
      </Typography>
    )}

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginbottom: "10px",
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
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          fontSize: {
            lg: "18px",
            md: "18px",
            sm: "18px",
            xs: "18px",
          },
          lineHeight: 1.5,     
        }}
      >
        {description}
      </Typography>
    </Box>
    <Box>
    {links &&
                links.map((link, index) => (
                  <div key={index} style={{ marginBottom: "16px" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        fontSize: {
                          lg: "18px",
                          md: "18px",
                          sm: "18px",
                          xs: "18px",
                        },
                        lineHeight: 1.5,
                      }}
                    >
                                  <a
                            href={link}
                            style={{
                              color: "#337f83",
                              textDecoration: "none",
                              fontWeight: "bold",
                            }}
                          >
                            <ChevronRightIcon
                              sx={{
                                fontSize: "20px",
                                marginRight: "8px",
                                color: "#337f83",
                              }} // Customize icon size and spacing
                            />
                            {link}
                          </a>
                     
                    </Typography>
                  </div>
                ))}
    </Box>
    <Box
    sx={{
        marginTop: "auto", // Push this section to the bottom
      }}
    >
      {startTime && (
        <Typography variant="h5" sx={{ color: "text.secondary" , fontSize: {
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },}}>
          <strong>Time: </strong> {formatDate(startTime)}:{" "}
          {formatTime(startTime)}
          {endTime && ` - ${formatTime(endTime)}`}{" "}
          {/* Only render endTime if it exists */}
        </Typography>
      )}
      {location && (
        <Typography variant="h5" sx={{ color: "text.secondary",  fontSize: {
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },}}>
          <strong>Location:</strong> {location}
        </Typography>
      )}
    </Box>
   
  </>
);
export default PageTextPart;
