import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { getCurrentWeek } from "../../utils/GetCurrentWeek";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "white",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function RowAndColumnSpacing() {
  //const currentWeek = getCurrentWeek();
  const currentWeek = getCurrentWeek().filter(day => day.events.length > 0); // Filter out days without events
  return (
    <Box
      sx={{
        width: {
          lg: "60%",
          md: "70%",
          sm: "100%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        overflow:"auto"
      }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        {currentWeek.map((day, index) => (
          <Grid container columns={12} key={index} size={12}>
            <Grid size={3}>
              <Item>
                <Typography>{day.date}</Typography>
                <Typography>{day.dayName}</Typography>
              </Item>
            </Grid>
            <Grid
              size={9}
              sx={{
                alignContent: "center",
                overflow: "hidden", // Hide overflow content
                textOverflow: "ellipsis", // Add ellipsis if content overflows
                whiteSpace: "nowrap",
              }}
            >
              <Item>
                {day.events.length > 0 ? (
                  day.events.map((event, i) => (
                    <Typography key={i} noWrap>
                      {event}
                    </Typography>
                  ))
                ) : (
                  <Typography noWrap>No events</Typography>
                )}
              </Item>
            </Grid>
            {/* This line would also render after the last item */}

            <Grid size={12}>
              <Box
                sx={{ borderBottom: "1px solid #ccc", width: "100%", my: 1 }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
