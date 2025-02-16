import Grid from "@mui/material/Grid2";
import { UserCategory } from "../../models/User";
import { Button, Paper } from "@mui/material";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { CalendarEvent } from "../../models/CalendarEvent";

// Sidebar Component
const Sidebar = ({
  events,
  handleEdit,
  handleDelete,
  handleDetailOnTable: handleDetail,
  currentUser,
}: {
  events: CalendarEvent[];
  handleEdit: (event: CalendarEvent) => void;
  handleDelete: (event: CalendarEvent) => void;
  handleDetailOnTable: (event: CalendarEvent) => void;
  currentUser: any; // Adjust type based on your context
}) => {
  const isAdmin = currentUser?.category === UserCategory.Admin;

  const dateColumnSize = isAdmin ? 2 : 2;
  const timeColumnSize = isAdmin ? 3 : 3;
  const titleColumnSize = isAdmin ? 2 : 3;
  const locationColumnSize = isAdmin ? 2 : 2;
  const actionColumnSize = isAdmin ? 3 : 2;

  const today = new Date();
  const fourWeeksLater = new Date();
  fourWeeksLater.setDate(today.getDate() + 14);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.start);
    return eventDate >= today && eventDate <= fourWeeksLater;
  });
  const sortedEvents = filteredEvents.sort((a, b) => {
    const dateA = new Date(a.start);
    const dateB = new Date(b.start);
    return dateA.getTime() - dateB.getTime(); // descending order
  });

  return (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2>Evenemang de kommande 2 veckorna ({events.length})</h2>
        <Paper
          elevation={1}
          style={{ marginBottom: "30px", backgroundColor: "#CED9E5", borderRadius: "10px",padding:10 }}
        >
          <Grid container spacing={0} style={{ padding: "10px" }}>
            {/* Header Row */}
            <Grid size={dateColumnSize}>
              <strong>Date</strong>
            </Grid>
            <Grid size={timeColumnSize}>
              <strong>Time</strong>
            </Grid>
            <Grid size={titleColumnSize}>
              <strong>Event</strong>
            </Grid>
            <Grid size={locationColumnSize} sx={{ textAlign: "left",display: { xs: "none", sm: "none", md: "block" }  }}>
              <strong>Location</strong>
            </Grid>
            <Grid size={actionColumnSize}>
              <strong>Action</strong>
            </Grid>
          </Grid>
          {/* Event Rows */}
          {sortedEvents.map((event) => (
            <SidebarEvent
              key={event.id}
              event={event}
              handleDetail={() => handleDetail(event)}
              onEdit={isAdmin ? handleEdit : null}
              onDelete={isAdmin ? handleDelete : null}
              // onEdit={handleEdit}
              // onDelete={handleDelete}
            />
          ))}
        </Paper>
      </div>
    </div>
  );
};

// SidebarEvent Component
const SidebarEvent = ({
  event,
  onEdit,
  onDelete,
  handleDetail,
}: {
  event: CalendarEvent;
  onEdit: ((event: CalendarEvent) => void) | null;
  onDelete: ((event: CalendarEvent) => void) | null;
  handleDetail: (event: CalendarEvent) => void;
}) => {
  const hasActionColumn = !!(onEdit || onDelete); // Check if action buttons exist
  const dateColumnSize = hasActionColumn ? 2 : 2;
  const timeColumnSize = hasActionColumn ? 3 : 3;
  const titleColumnSize = hasActionColumn ? 2 : 3;
  const locationColumnSize = hasActionColumn ? 2 : 2;
  const actionColumnSize = hasActionColumn ? 3 : 2;

  return (
    <Grid
      container
      key={event.id}
      sx={{ padding: "10px", borderBottom: "1px solid #ddd", fontSize:"14px"}}
    >
      <Grid size={dateColumnSize} sx={{ textAlign: "left", }}>
        {event.start ? formatDate(event.start) : "Invalid date"}
      </Grid>
      <Grid size={timeColumnSize} sx={{ textAlign: "left", }}>
        {event.start && event.end
          ? `${formatTime(event.start)} - ${formatTime(event.end)}`
          : "Invalid time"}
      </Grid>
      <Grid
        size={titleColumnSize}
        sx={{
          textAlign: "left",
          overflow: "hidden",
          whiteSpace: "nowrap", // Prevent text from wrapping to the next line
          textOverflow: "ellipsis",
          fontSize:"14px"
          
        }}
      >
        {event.title}
      </Grid>
      <Grid
        size={locationColumnSize}
        sx={{
            textAlign: "left",
          overflow: "hidden",
          whiteSpace: "nowrap", // Prevent text from wrapping to the next line
          textOverflow: "ellipsis",
          display: { xs: "none",  sm: "block" } ,
          fontSize:"14px"
        }}
      >
        {event.location}
      </Grid>
      <Grid size={actionColumnSize} sx={{ textAlign: "left",}}>
        <Button
          onClick={() => handleDetail(event)}
          sx={{ color: "#202A44", marginRight: "5px",fontSize:"12px" }}
        >
          Detail
        </Button>
        {onEdit && (
          <Button onClick={() => onEdit(event)} sx={{ marginRight: "5px", fontSize:"12px"}}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button onClick={() => onDelete(event)} color="error"sx={{  fontSize:"12px"}} >
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
