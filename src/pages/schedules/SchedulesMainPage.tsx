import { Box, Typography } from "@mui/material";
import { comingEvents } from "../../data";
import SectionLine from "../../components/pageSections/SectionLine";
import Carousel from "../../components/slides/Carousel";
import CollapsibleTable from "../../components/tables/ServingScheduleTable";
import EventScheduleCalendar from "../../components/calendars/EventScheduleCalendar";

export default function SchedulesMainPage() {
  return (
    <>
      <Box
        sx={{
            marginTop:{
                md:"130px",      
                xs:"100px"
            },
          backgroundColor: "#f0f4f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "90%", }} id="commingEvent">
          <Carousel events={comingEvents} />
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
        <Box
          sx={{
            backgroundColor: "#d0d8e0",
            width: "100%",
          }}
        >
          <SectionLine
            text="Serveringsschema för kommande vecka"
            useWhiteStroke={true}
          />
        </Box>
        <Box sx={{  marginBottom: "50px", width: "90%" }}>
          <Typography
            sx={{ marginBottom: "30px", marginTop: "30px",textAlign: "center" }}
            variant="h4"
          >
            Comming Week Schedule
          </Typography>
          {/* <ServingScheduleCollapsibleTable /> */}
          <CollapsibleTable />
        </Box>
        {/* <EventSchedule />
        <Calendar /> */}
      </Box>
    </>
  );
}
