import ContactSection from "../../components/pageSections/contact-section/ContactSection";
import { Box, IconButton, Modal } from "@mui/material";
import Intro from "../../components/pageSections/contact-section/Intro";
import map from "../../assets/map.png";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { contectText } from "../../data";

export default function ContactMainPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Intro content={contectText} />
        <ContactSection />
        <>
          {/* Map Frame */}
          <Box
            onClick={handleOpen}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "0 auto",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: { xs: "80%", sm: "70%", md: "50%" },
                height: { xs: "250px", sm: "300px", md: "400px" },
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: 0,
              }}
            >
              <img
                src={map}
                alt="Map"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>

          {/* Full View Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
                outline: "none",
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional background for visibility
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Full-size Map Image */}
              <img
                src={map}
                alt="Map Full View"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Modal>
        </>
      </div>
    </>
  );
}
