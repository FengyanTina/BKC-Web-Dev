import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import ReadMoreDialogs from "../forms/ReadMoreDialog";
interface IntroCardProps {
  title: string;
  subTitle: string;
  description: string;
  image?: string;
}
export default function TeamIntroCard({
  title,
  subTitle,
  description,
  image,
}: IntroCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <Card sx={{ maxWidth: 400,backgroundColor:"transparent",cursor: "default",
        "&:hover": {
          cursor: "default", // Ensure hover does not change the cursor
        }, }}   elevation={0}>
      
        {image && (
          <CardMedia component="img" height="250" image={image} alt="" />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {subTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              position: "relative",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}  sx={{ color: "#337f83",fontWeight:"800",textDecoration: "underline", }}>
          Read More
        </Button>
      </CardActions>
      <ReadMoreDialogs
        open={modalOpen}
        onClose={handleClose}
        title={title}
        subtitle={subTitle}
        content={description}
      />
    </Card>
  );
}
