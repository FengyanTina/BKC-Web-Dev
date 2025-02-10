import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import ReadMoreDialogs from "../forms/ReadMoreDialog";
import { ImageInforSectionModel } from "../../models/ImageInforSection";

export default function TeamIntroCard({
  title,
  subtitle,
  description,
  images,
  buttonText,
}: ImageInforSectionModel) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "transparent",
        cursor: "#CED9E5",
        "&:hover": {
          cursor: "default", // Ensure hover does not change the cursor
        },
      }}
      elevation={0}
    >
      {images && (
        <CardMedia
          component="img"
          height="250"
          image={Array.isArray(images) ? images[0] : images}
          alt=""
        />
      )}

      <CardContent sx={{ color: "#CED9E5" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#CED9E5",
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
        <Button
          size="small"
          onClick={handleOpen}
          sx={{
            color: "#CED9E5",
            fontWeight: "800",
            textDecoration: "underline",
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
      <ReadMoreDialogs
        open={modalOpen}
        onClose={handleClose}
        title={title}
        subtitle={subtitle}
        content={description}
      />
    </Card>
  );
}
