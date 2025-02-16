import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatTime } from "../../utils/FormatDateOrTime";
import { CardTextSectionModel } from "../../models/CardTextSectionModel";
import { HashLink } from "react-router-hash-link";
import { SocialIcon } from "react-social-icons";
import { Box, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import ReadMoreDialogs from "../forms/ReadMoreDialog";

export default function ImageInforSectionText({
  category,
  title,
  subtitle,
  description,
  start: startTime,
  end: endTime,
  location,
  links,
  showSocialIcons = false,
  buttonText,
  maxLines = 5,
}: CardTextSectionModel) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
//   const truncateTextWithParagraphs = (text: string, maxWords: number): string[] => {
//     let wordsRemaining = maxWords;
//     let truncatedParagraphs: string[] = [];

//     for (let paragraph of text.split("\n").map(p => p.trim()).filter(p => p !== "")) {
//       let words = paragraph.split(/\s+/); // Split paragraph into words

//       if (wordsRemaining <= 0) break; // Stop if word limit reached

//       if (words.length > wordsRemaining) {
//         truncatedParagraphs.push(words.slice(0, wordsRemaining).join(" ") + "...");
//         break; // Stop after reaching the limit
//       } else {
//         truncatedParagraphs.push(paragraph);
//         wordsRemaining -= words.length; // Decrease remaining words count
//       }
//     }

//     return truncatedParagraphs; // ✅ Return an array of paragraphs
//   };

//   // ✅ CALL the function and store the result
//   const truncatedText = truncateTextWithParagraphs(description, 50);
  return (
    <Card
      sx={{
        height: "100%",
        border: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          paddingLeft: "0",
          color: "#CED9E5",
          
        }}
      >
        {category && (
          <Typography
            gutterBottom
            sx={{
              fontSize: 18,
              color: "#CED9E5",
            }}
          >
            {category}
          </Typography>
        )}

        <Typography
          variant="h5"
          component="div"
          sx={{
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            // color: "text.secondary",
            mb: 1.5,
            fontSize: 18,
            color: "#CED9E5",
          }}
        >
          {subtitle}
        </Typography>
        <Box
         
        >
          {/* {description.split("\n").map((paragraph, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  color: "#CED9E5",
                  fontSize: 18,
                  whiteSpace: "pre-line",
                  lineHeight: "1.5em",
                }}
              >
                {paragraph}
              </Typography>
            </Box>
          ))} */}
              <Typography
          variant="body1"
          sx={{
            color: "#CED9E5",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: maxLines,
            position: "relative",
            whiteSpace: "pre-line", // Forces line breaks at "\n"
          }}
        >
          {description}
        </Typography>
        </Box>
       

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
      <CardActions>
        <Link
          onClick={handleOpen}
          sx={{
            cursor: "pointer",
            color: "#CED9E5",
            fontWeight: "800",
            textDecoration: "underline",
            fontSize: "18px",
           
          }}
          target="_blank"
          rel="noopener"
          // underline="hover"
        >
          {buttonText}
        </Link>
      </CardActions>
      <ReadMoreDialogs
        open={modalOpen}
        onClose={handleClose}
        title={title}
        subtitle={subtitle}
        content={description}
      />
      <Box>
        {startTime && (
          <Typography
            variant="h5"
            sx={{
                mt: 3,
              fontSize: "18px",
              color: "#CED9E5",
              paddingLeft:1,
            }}
          >
            <strong>Time: </strong>
            {formatTime(startTime)}
            {endTime && ` - ${formatTime(endTime)}`}{" "}
            {/* Only render endTime if it exists */}
          </Typography>
        )}
        {location && (
          <Typography
            variant="h5"
            sx={{
              color: "#CED9E5",
              fontSize: "18px",
              paddingLeft:1,
            }}
          >
            <strong>Location:</strong> {location}
          </Typography>
        )}
      </Box>
      <Box sx={{mt: links && links.length > 0 ? 3 : 0, 
        
      }}>
        {links &&
          links.map((link, index) => (
            <div key={index}>
              <Typography
                variant="h5"
                sx={{
                    display: "flex",  // Ensures alignment of icon and text
                    alignItems: "center",
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
                      fontWeight: "800",
                      textDecoration: "none",
                       display: "flex",  // Ensures alignment of icon and text
                    alignItems: "center",
                    }}
                    smooth
                    to={link.url}
                  >
                    <ChevronRightIcon
                      sx={{
                        fontSize: "18px",
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
                      display: "flex",  // Ensures alignment of icon and text
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
    </Card>
  );
}
