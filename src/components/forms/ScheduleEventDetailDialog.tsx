import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Slider, styled } from "@mui/material";
import "./form.css";
import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
import { CalendarEvent } from "../../models/CalendarEvent";

interface ScheduleEventDetailsDialogProps {
  open: boolean;
  event: CalendarEvent | null;
  onClose: () => void;
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
export default function ScheduleEventDetailDialog({
  open,
  event,
  onClose,
}: ScheduleEventDetailsDialogProps) {
  const [fontSize, setFontSize] = React.useState(16);
  const handleFontSizeChange = (newValue: number | number[]) => {
    setFontSize(newValue as number); // Cast newValue to number
  };

  return (
    <React.Fragment>
      <BootstrapDialog open={open} onClose={onClose}>
        <Box className="modal-overlay">
          <Box className="modal-content" style={{ fontSize: `${fontSize}px` }}>
            <Box
              component="h2"
              sx={{
                display: "flex",
                m: "auto",
                width: "fit-content",
                textAlign: "center", 
              }}
            >
              {event?.title}
              
            </Box>
            <DialogContent dividers>
              <h4>
                {event ? (
                  event.allDay ? (
                    <>
                      <strong>Whole Day Event on</strong>{" "}
                      {formatDate(event.start)}
                    </>
                  ) : (
                    <>
                      <strong>Date:</strong> {formatDate(event.start)}
                    </>
                  )
                ) : (
                  "No event date available"
                )}
              </h4>

              {/* Event Time (if not all day) */}
              {event && !event.allDay && (
                <>
                  <h4>
                    <strong>Time: </strong>{" "}
                    {event.end
                      ? `${formatTime(event.start)} - ${formatTime(event.end)}`
                      : `${formatTime(event.start)}`}
                  </h4>
                </>
              )}

              <h4>
                <strong>Location: </strong>{" "}
                {event?.location || "No location specified."}
              </h4>
            </DialogContent>

            <DialogContent dividers>
              <Box
                component="h3"
                sx={{
                  display: "flex",
                  m: "auto",
                  width: "fit-content",
                  textAlign: "center", 
                }}
              >
                {" "}
                Details
              </Box>
              <p>{event?.description || "No description provided."}</p>
            </DialogContent>
            <DialogContent></DialogContent>
            <Box style={{ marginTop: "20px", textAlign: "center" }}>
              <label htmlFor="font-size-slider">Adjust text size:</label>
              <Slider
                id="font-size-slider"
                min={12}
                max={30}
                value={fontSize}
                onChange={(_e, newValue) => handleFontSizeChange(newValue)}
                style={{ width: "200px", margin: "10px auto" }}
              />
            </Box>
            <DialogActions>
              <Button onClick={onClose}>Close</Button>
            </DialogActions>
          </Box>
        </Box>
      </BootstrapDialog>
    </React.Fragment>
  );
}
