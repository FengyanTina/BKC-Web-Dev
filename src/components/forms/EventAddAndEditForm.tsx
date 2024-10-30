import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,

} from "@mui/material";
import { CalendarEvent } from "../../models/CalendarEvent";

interface EventFormProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  selectedEvent: CalendarEvent | null;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEvent: () => void;
  event?: CalendarEvent; // Optional because it can be undefined when adding a new event
  isEditing: boolean;
}


const EventAddAndEditForm = ({
  isModalOpen,
  handleCloseModal,
  selectedEvent,
  isEditing,
  handleFieldChange,
  handleSaveEvent,
}: EventFormProps) => {
  return (
    <Dialog open={isModalOpen} onClose={handleCloseModal}>
      <DialogTitle>{isEditing ? "Event Details" : "Add New Event"}</DialogTitle>
      <DialogContent>
        {selectedEvent && (
          <div>
            <TextField
              label="Title"
              name="title"
              value={selectedEvent.title}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
           
            />
            <TextField
              label="Description"
              name="description"
              value={selectedEvent.description || ""}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              label="Location"
              name="location"
              value={selectedEvent.location || ""}
              onChange={handleFieldChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            {!isEditing && (
              <div>
                <TextField
                  label="Repeat Count (Weeks)"
                  name="repeatCount"
                  type="number"
                  value={selectedEvent.repeatCount ?? 0} 
                  onChange={handleFieldChange}
                  fullWidth
                  margin="normal"
                />
              </div>
            )}
            <Button
              onClick={handleSaveEvent}
              color="primary"
              variant="contained"
              style={{ marginTop: "16px", marginRight: "10px" }}
            >
              Save Event
            </Button>

            <Button
              onClick={handleCloseModal}
              color="primary"
              variant="contained"
              style={{ marginTop: "16px" }}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventAddAndEditForm;
