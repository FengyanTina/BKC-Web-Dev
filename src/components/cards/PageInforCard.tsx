
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { PageInforModel } from "../../models/PageInforModel";


export default function PageInforCard({
  category,
  title,
 subtitle,
 description,
  buttonText,
  startTime,
  endTime,
  location,
}: PageInforModel) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: 350,  
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
          paddingLeft:'0'
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
          <Typography 
          variant="caption" 
          sx={{ mt: 2, color: "text.secondary" }}>
           {formatDate(startTime)}: {formatTime(startTime)} 
           {endTime && ` - ${formatTime(endTime)}`} {/* Only render endTime if it exists */}
          </Typography>
        )}
         {location && (
          <Typography 
          variant="caption" 
          sx={{ mt: 2, color: "text.secondary" }}>
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
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}
