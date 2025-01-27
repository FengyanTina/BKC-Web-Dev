import { Box } from "@mui/material";
import { higlightEvents } from "../../data";
import SectionLine from "../../components/pageSections/SectionLine";
import Carousel from "../../components/slides/Carousel";
import EventScheduleCalendar from "../../components/calendars/EventScheduleCalendar";

export default function SchedulesMainPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: {
            md: "130px",
            xs: "100px",
          },
          backgroundColor: "#f0f4f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "90%" }} id="commingEvent">
          <Carousel events={higlightEvents} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#d0d8e0",
            width: "100%",
          }}
        >
          <SectionLine text="Evenemangskalender" useWhiteStroke={true} />
        </Box>
        <Box
          sx={{
            mx: 1,
            width: {
              lg: "60%",
              sm: "100%",
              xm: "70%",
            },
          }}
          id="eventCalendar"
        >
          <EventScheduleCalendar />
        </Box>
      </Box>
    </>
  );
}
