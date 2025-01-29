import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { CalendarEvent } from "../../models/CalendarEvent";
import { User } from "../../models/User";
import { newsImgs } from "../../data";
import { useEvents } from "../../context/EventContext";

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
//   const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
//   const [Selectedimage, setSelectedImage] = useState(null);
  
  const [isUploading, setIsUploading] = useState(false);
//   const [usedImageIds, setUsedImageIds] = useState<string[] | undefined>(undefined);
  
  
  const { events } = useEvents();

  //   const handleImageFileChange = (
  //     event: React.ChangeEvent<HTMLInputElement>
  //   ) => {
  //     const file = event.target.files?.[0] || null;
  //     setSelectedFile(file);

  //     // Generate preview URL for the uploaded file
  //     if (file) {
  //       setImagePreview(selectedImageId);
  //     } else {
  //       setImagePreview(null);
  //     }
  //   };

  //   const handleSaveWithImage = async () => {
  //     const selectedImageId = imageId;

  //     // Upload image to Firebase Storage if a file is selected
  //     if (selectedFile) {
  //       try {
  //         setIsUploading(true);

  //         const storageRef = ref(
  //           storage,
  //           `event-images/${currentDevUser?.id || "anonymous"}/${Date.now()}-${
  //             selectedFile.name
  //           }`
  //         );

  //         const snapshot = await uploadBytes(storageRef, selectedFile);
  //         imageUrl = await getDownloadURL(snapshot.ref);
  //       } catch (error) {
  //         console.error("Error uploading image:", error);
  //         alert("Failed to upload the image. Please try again.");
  //         return; // Exit early if upload fails
  //       } finally {
  //         setIsUploading(false);
  //       }
  //     }

  //     // Pass the imageUrl to the parent `handleSaveEvent`
  //     handleSaveEvent(imageUrl);
  //   };

  // const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0] || null;
  //     setSelectedFile(file);

  //     // Generate preview URL for the uploaded file
  //     if (file) {
  //       const previewUrl = URL.createObjectURL(file);
  //       setImagePreview(previewUrl);
  //       return () => URL.revokeObjectURL(previewUrl);
  //     } else {
  //       setImagePreview(null);
  //     }
  //   };

  // const handleSaveWithImage = async () => {
  //     let imageUrl: string | undefined = undefined;

  //     // Upload image to Firebase Storage if a file is selected
  //     if (selectedFile) {
  //       try {
  //         setIsUploading(true);

  //         const storageRef = ref(
  //             storage,
  //             `event-images/${currentDevUser?.id || "anonymous"}/${Date.now()}-${selectedFile.name}`
  //           );

  //         const snapshot = await uploadBytes(storageRef, selectedFile);
  //         imageUrl = await getDownloadURL(snapshot.ref);
  //       } catch (error) {
  //         console.error("Error uploading image:", error);
  //         alert("Failed to upload the image. Please try again.");
  //         return; // Exit early if upload fails
  //       } finally {
  //         setIsUploading(false);
  //       }
  //     }

  //     // Pass the imageUrl to the parent `handleSaveEvent`
  //     handleSaveEvent(imageUrl);
  //   };
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>(undefined);
  const [showDropdown, setShowDropdown] = useState(false);
  const [usedImageUrls, setUsedImageUrls] = useState<string[]>([]);
  const [availableImages, setAvailableImages] = useState(newsImgs);
  
  // Fetch events and used image URLs from Firestore
  useEffect(() => {
    const fetchUsedImages = async () => {
      const newsEvents = events.filter((event) => event.showOnNews === true);
  
      const imgNames = newsEvents
      .map((e) => e.imgUrl?.split("/").pop()) // Get only file name
      .filter((name): name is string => Boolean(name));
  
      setUsedImageUrls(imgNames);
    };
  
    fetchUsedImages();
  }, [events]);
  
  useEffect(() => {
    const filteredImages = newsImgs.filter((img) => !usedImageUrls.includes(img.id));
    setAvailableImages(filteredImages);
  }, [usedImageUrls]);
  
  // Handle image selection (set selected image URL)
  const handleSelectImage = (url: string, id: string) => {
    setSelectedImageUrl(url); // Save URL for preview
    setSelectedImageId(id);   // Save ID for Firestore
    setShowDropdown(false);   // Close dropdown
  };

  const handleSaveWithImage = async () => {
    if (selectedImageUrl && selectedImageId) {
      try {
        setIsUploading(true);
        const filename = selectedImageUrl.split("/").pop();
        // const filenameWithExtension = selectedImageUrl.split("/").pop(); // "worshipHands.jpg"
        // const filename = filenameWithExtension?.split(".")[0];
        if (!filename) {
            console.error("Filename extraction failed");
            return;
          }
          handleSaveEvent(filename);
        // Any upload logic if required
  
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload the image. Please try again.");
        return; // Exit early if upload fails
      } finally {
        setIsUploading(false);
      }
    }
   
  
    // Pass the selected image URL to the parent `handleSaveEvent`
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
            <div>
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
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  width: "200px",
                  cursor: "pointer",
                  backgroundColor: "#f9f9f9",
                }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedImageUrl ? (
                  <img
                    src={
                      availableImages.find((img) => img.url === selectedImageUrl)
                        ?.id
                    }
                    alt="Selected"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  "Select an image"
                )}
              </div>

              {showDropdown && (
                <div
                  style={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginTop: "8px",
                    width: "200px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {availableImages.map((img) => (
                    <div
                      key={img.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleSelectImage(img.url, img.id)}
                    >
                      <img
                         src={img.url}
                         alt={`Preview of ${img.id}`}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          marginRight: "8px",
                        }}
                      />
                      <span>{`Image ${img.id}`}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
              <FormControlLabel
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
              />

              <FormControlLabel
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
              />
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
