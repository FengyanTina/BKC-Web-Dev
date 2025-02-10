import "./intro.css";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
interface introProp {
  content: string[];
}
export default function Intro({ content }: introProp) {
  return (
    <Box className="intro-container">
      <Grid>
        <Box
          sx={{
            paddingBottom: { xs: "20px", sm: "20px", lg: "25px" },
            pt: { xs: "55px", sm: "40px", md: "50px", lg: "0px" },
            marginTop: "20px",
          }}
        >
          <Typography
            className="intro-p"
            sx={{
              fontSize: { xs: "18px", sm: "18px", lg: "20px" },
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "calc(1.5em * 7)", // 9 lines when not expanded
              lineHeight: 1.3,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
              overflowY: "auto",
            }}
          >
            {content.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  marginBottom: "3px",
                }}
              >
                {paragraph}
              </p>
            ))}
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
