import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { CalendarEvent } from "../../models/CalendarEvent";
import { User } from "../../models/User";

interface EventFormProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  selectedEvent: CalendarEvent | null;
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveEvent: (imageUrl?: string) => void;
  event?: CalendarEvent; // Optional because it can be undefined when adding a new event
  isEditing: boolean;
  currentDevUser?: User;
}

const EventAddAndEditForm = ({
  isModalOpen,
  handleCloseModal,
  selectedEvent,
  isEditing,
  handleFieldChange,
  handleSaveEvent,
}: EventFormProps) => {
 //  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [isUploading, setIsUploading] = useState(false);
  //const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

//   const resetForm = () => {
//     // Reset image fields
//     setSelectedFile(undefined);
//     setImagePreview(undefined);
//     setIsUploading(false);

//     // Reset any other form state here if needed (e.g., text fields)
//   };

//   const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     setSelectedFile(file);

//     // Generate a preview URL for the uploaded file
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setImagePreview(previewUrl); // Show preview
//     } else {
//         setSelectedFile(undefined);
//       setImagePreview(undefined); // Clear preview if no file selected
//     }
//   };

  const handleSaveWithImage = async () => {
    let imageUrl: string | undefined = undefined;

    // Upload the image to Firebase Storage if a file is selected
    // if (selectedFile) {
      try {
        setIsUploading(true);
        handleSaveEvent(imageUrl);

        // Create a reference in Firebase Storage (choose your desired path)
        // const storageRef = ref(
        //   storage,
        //   `event-images/${Date.now()}-${selectedFile.name}`
        // );

        //// Upload the file to Firebase Storage
        //const snapshot = await uploadBytes(storageRef, selectedFile);

        //// Get the download URL of the uploaded image
       // imageUrl = await getDownloadURL(snapshot.ref);

       // console.log("Image uploaded successfully:", imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload the image. Please try again.");
        return; // Exit early if upload fails
      } finally {
        setIsUploading(false);
      }
   
  };

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
      

            {/* <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
                style={{ marginTop: "16px" }}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    marginTop: "16px",
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div> */}

            <div>
              {/* New Checkboxes for showOnComingEvent and showOnNews */}
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedEvent.showOnCommingEvent || false}
                    onChange={(e) =>
                      handleFieldChange({
                        target: {
                          name: "showOnCommingEvent",
                          value: e.target.checked,
                        },
                      } as any)
                    }
                    name="showOnCommingEvent"
                    color="primary"
                  />
                }
                label="Show on Coming Events"
              /> */}

              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedEvent.showOnNews || false}
                    onChange={(e) =>
                      handleFieldChange({
                        target: {
                          name: "showOnNews",
                          value: e.target.checked,
                        },
                      } as any)
                    }
                    name="showOnNews"
                    color="primary"
                  />
                }
                label="Show on News"
              /> */}
            </div>

            <Button
              onClick={handleSaveWithImage}
              color="primary"
              variant="contained"
              style={{ marginTop: "16px", marginRight: "10px" }}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Save Event"}
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
