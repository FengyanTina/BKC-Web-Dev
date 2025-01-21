import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { PageInforModel } from "../../models/PageInforModel";
import { HashLink } from "react-router-hash-link";
import { SocialIcon } from "react-social-icons";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function PageInforCard({
  category,
  title,
  subtitle,
  description,
  buttonText,
  startTime,
  endTime,
  location,
  buttonLink,
  links,
  showSocialIcons = false,
}: PageInforModel) {
  return (
    <Card
      sx={{
        height: "100%",
        border: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          paddingLeft: "0",
        }}
      >
        {category && (
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
              fontSize: 18,
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {category}
          </Typography>
        )}
        {startTime && (
          <Typography variant="caption" sx={{ mt: 2, color: "text.secondary" }}>
            {formatDate(startTime)}: {formatTime(startTime)}
            {endTime && ` - ${formatTime(endTime)}`}{" "}
            {/* Only render endTime if it exists */}
          </Typography>
        )}
        {location && (
          <Typography variant="caption" sx={{ mt: 2, color: "text.secondary" }}>
            {location}
          </Typography>
        )}
        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 1,
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            mb: 1.5,
            fontSize: 18,
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {subtitle}
        </Typography>

        {description.split("\n").map((paragraph, index) => (
          <Box key={index} sx={{ display: "block", mb: 2 }}>
            <Typography
              variant="body2"
              sx={{
                width: "100%",
                WebkitLineClamp: 5,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                fontSize: 18,
              }}
            >
              {paragraph}
            </Typography>
          </Box>
        ))}
        {showSocialIcons && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "10px",
              paddingLeft: "10px",
            }}
          >
            <SocialIcon
              url="https://www.youtube.com/c/Bor%C3%A5sKristnaCenter"
              network="youtube"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="https://www.instagram.com/boraskristnacenter/"
              network="instagram"
              style={{ height: 25, width: 25 }}
            />

            <SocialIcon
              url="https://www.facebook.com/BorasKristnaCenter/?locale=sv_SE"
              network="facebook"
              style={{ height: 25, width: 25 }}
            />
          </Box>
        )}
      </CardContent>

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
                  href={link.url}
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
                  {link.label}
                </a>
              </Typography>
            </div>
          ))}
      </Box>
      {buttonLink && (
        <CardActions>
          {buttonLink.startsWith("#") || buttonLink.includes("#") ? (
            <HashLink smooth to={buttonLink}>
              {buttonText}
            </HashLink>
          ) : (
            <Link to={buttonLink}>{buttonText}</Link>
          )}
        </CardActions>
      )}
    </Card>
  );
}
