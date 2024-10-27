import { Box, Typography } from "@mui/material";
import { comingEvents } from "../../data";
import SectionLine from "../../components/pageSections/SectionLine";
import Carousel from "../../components/slides/Carousel";
import CollapsibleTable from "../../components/tables/ServingScheduleTable";
import MyCalendar from "../../components/calendars/MyCalendar";

export default function SchedulesMainPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: "150px",
          backgroundColor: "#f0f4f8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "80%", marginBottom: "30px" }} id="commingEvent">
          <Carousel events={comingEvents} />
        </Box>
        <Box  sx={{
          
          backgroundColor: "#d0d8e0",
          width:"100%"
         
        }}>
        <SectionLine text="Evenemangskalender" useWhiteStroke={true} />
        </Box>
        <Box
          sx={{
            marginTop: "50px",
            marginBottom: "50px",

            width: {
              lg: "60%",
              sm: "100%",
              xm: "70%",
            },
          }}
           id="eventCalendar"
        >
          {/* <EventsCalendar /> */}
          {/* <EventCalendar /> */}
          <MyCalendar/>
        </Box>
        <Box  sx={{
          
          backgroundColor: "#d0d8e0",
          width:"100%"
         
        }}>
          <SectionLine text="Serveringsschema för kommande vecka" useWhiteStroke={true}  />
        </Box>
        <Box sx={{ marginTop: "50px", marginBottom: "50px", width: "90%" }}>
          <Typography
            sx={{ marginBottom: "50px", textAlign: "center" }}
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
