import { Box, Typography } from "@mui/material";
import { PageInforModel } from "../../models/PageInforModel";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";

const PageTextPart = ({
  title,
  subtitle,
  description,
  linkSubtitle,
  startTime,
  endTime,
  location,
}: PageInforModel) => (
  <>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        mx: "auto",
        px: 3,

        fontSize: {
          lg: "40px",
          md: "30px",
          sm: "30px",
          xs: "28px",
        },
      }}
    >
      {title}
    </Typography>
    {linkSubtitle && (
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mx: "auto",
          px: 3,
          mt: 2,
          marginBottom: "10px",
          fontSize: {
            lg: "30px",
            md: "22px",
            sm: "22px",
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
          textAlign: "center",
          mx: "auto",
          px: 3,
          mt: 2,
          marginBottom: "10px",
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
            lg: "25px",
            md: "20px",
            sm: "20px",
            xs: "18px",
          },
          lineHeight: 1.5,
          px: 3,
         
        }}
      >
        {description}
      </Typography>
    </Box>
    <Box>
      {startTime && (
        <Typography variant="h5" sx={{ mt: 2, px:3,color: "text.secondary" , fontSize: {
            lg: "25px",
            md: "20px",
            sm: "18px",
            xs: "16px",
          },}}>
          <strong>Time: </strong> {formatDate(startTime)}:{" "}
          {formatTime(startTime)}
          {endTime && ` - ${formatTime(endTime)}`}{" "}
          {/* Only render endTime if it exists */}
        </Typography>
      )}
      {location && (
        <Typography variant="h5" sx={{ mt: 2, px:3,color: "text.secondary",  fontSize: {
            lg: "25px",
            md: "20px",
            sm: "18px",
            xs: "16px",
          }, }}>
          <strong>Location:</strong> {location}
        </Typography>
      )}
    </Box>
  </>
);
export default PageTextPart;
