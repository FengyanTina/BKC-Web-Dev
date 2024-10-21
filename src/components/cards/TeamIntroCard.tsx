import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
interface IntroCardProps {
  title: string;
  subTitle: string;
  description: string;
  image?: string;
  onOpen: () => void;
}
export default function TeamIntroCard({
  title,
  subTitle,
  description,
  image,
  onOpen,
}: IntroCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {image && (
          <CardMedia component="img" height="240" image={image} alt="" />
        )}

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {subTitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Limit to 7 lines
              position: "relative",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onOpen}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
