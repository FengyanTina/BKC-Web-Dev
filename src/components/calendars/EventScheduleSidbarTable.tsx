import Grid from "@mui/material/Grid2";
import { UserCategory } from "../../models/User";
import { Button, Paper } from "@mui/material";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { CalendarEvent } from "../../models/CalendarEvent";

// Sidebar Component
const Sidebar = ({
  currentEvents,
  handleEdit,
  handleDelete,

  handleDetailOnTable: handleDetail,
  currentUser,
}: {
  currentEvents: CalendarEvent[];
  handleEdit: (event: CalendarEvent) => void;
  handleDelete: (event: CalendarEvent) => void;
  handleDetailOnTable: (event: CalendarEvent) => void;
  currentUser: any; // Adjust type based on your context
}) => {
  const isAdmin = currentUser?.category === UserCategory.Admin;

  const dateColumnSize = isAdmin ? 2 : 2;
  const timeColumnSize = isAdmin ? 2 : 2;
  const titleColumnSize = isAdmin ? 2 : 3;
  const locationColumnSize = isAdmin ? 3 : 3;
  const actionColumnSize = isAdmin ? 3 : 2;

  return (
    <div className="demo-app-sidebar">
      <div className="demo-app-sidebar-section">
        <h2>All Events ({currentEvents.length})</h2>
        <Paper
          elevation={1}
          style={{ marginBottom: "30px", backgroundColor: "#d0d8e0" }}
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
            <Grid size={locationColumnSize} sx={{ textAlign: "center" }}>
              <strong>Location</strong>
            </Grid>
            <Grid size={actionColumnSize}>
              <strong>Action</strong>
            </Grid>
          </Grid>
          {/* Event Rows */}
          {currentEvents.map((event) => (
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
  const timeColumnSize = hasActionColumn ? 2 : 2;
  const titleColumnSize = hasActionColumn ? 2 : 3;
  const locationColumnSize = hasActionColumn ? 3 : 3;
  const actionColumnSize = hasActionColumn ? 3 : 2;

  return (
    <Grid
      container
      key={event.id}
      style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
    >
      <Grid size={dateColumnSize} style={{ textAlign: "left" }}>
        {event.start ? formatDate(event.start) : "Invalid date"}
      </Grid>
      <Grid size={timeColumnSize} style={{ textAlign: "left" }}>
        {event.start && event.end
          ? `${formatTime(event.start)} - ${formatTime(event.end)}`
          : "Invalid time"}
      </Grid>
      <Grid
        size={titleColumnSize}
        style={{
          textAlign: "left",
          overflow: "hidden",
          whiteSpace: "nowrap", // Prevent text from wrapping to the next line
          textOverflow: "ellipsis",
        }}
      >
        {event.title}
      </Grid>
      <Grid
        size={locationColumnSize}
        style={{
          textAlign: "center",
          overflow: "hidden", 
          whiteSpace: "nowrap", // Prevent text from wrapping to the next line
          textOverflow: "ellipsis",
        }}
      >
        {event.location}
      </Grid>
      <Grid size={actionColumnSize} style={{ textAlign: "left" }}>
        <Button
          onClick={() => handleDetail(event)}
          style={{ color: "#1B365D", marginRight: "5px" }}
        >
          Detail
        </Button>
        {onEdit && (
          <Button onClick={() => onEdit(event)} style={{ marginRight: "5px" }}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button onClick={() => onDelete(event)} color="error">
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
