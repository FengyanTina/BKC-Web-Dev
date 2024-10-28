import Grid from "@mui/material/Grid2";
import { UserCategory } from "../../models/User";
import { Button, Paper } from "@mui/material";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";

interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
}
// Sidebar Component
const Sidebar = ({
  currentEvents,
  handleEdit,
  handleDelete,
  handleDetailOnTable: handleDetail,
  currentUser,
}: {
  currentEvents: CustomEvent[];
  handleEdit: (event: CustomEvent) => void;
  handleDelete: (event: CustomEvent) => void;
  handleDetailOnTable: (event: CustomEvent) => void;
  currentUser: any;
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
        <Paper elevation={1} style={{ marginBottom: "30px", backgroundColor:"#d0d8e0" }}>
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
            <Grid size={locationColumnSize}>
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
  event: CustomEvent;
  onEdit: ((event: CustomEvent) => void) | null;
  onDelete: ((event: CustomEvent) => void) | null;
  handleDetail: (event: CustomEvent) => void;
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
      <Grid size={titleColumnSize} style={{ textAlign: "left" }}>
        {event.title}
      </Grid>
      <Grid size={locationColumnSize} style={{ textAlign: "left" }}>
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
          <Button
            onClick={() => onEdit(event)}
            style={{ marginRight: "5px" }}
          >
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            onClick={() => onDelete(event)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
