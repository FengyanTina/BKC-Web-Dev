import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Typography } from "@mui/material";
import HuvudloggaBKC3 from "../../assets/Huvudlogga-BKC3.png";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface TabDrawerProps {
  open: boolean;
  onClose: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}
const navRoutes = [
  { label: "Hem", path: "/home" },
  { label: "Om oss", path: "/aboutUs" },
  { label: "Kalender", path: "/schedules" },
  { label: "Tjänster", path: "/services" },
  { label: "Aktivitet", path: "/activities" },
  { label: "Kontakt", path: "/contact" },
];
const navItems = ["Hem", "Om oss", "Kalender", "Tjänster", "Aktivitet","Kontakt"];
export default function TabDrawer({
  open,
  onClose,
  handleLogin,
  handleLogout,
}: TabDrawerProps) {
  type NavItem = (typeof navItems)[number];
  const navigate = useNavigate();
  const { currentDevUser: currentUser } = useAuth();

  // Map icons to each nav item with proper typing
  const icons: Record<NavItem, JSX.Element> = {
    Hem: <HomeIcon />,
    "Om oss": <InfoIcon />,
    Kalender: <EventAvailableIcon />,
    Tjänster: <GroupsIcon />,
    Aktivitet: <LocalActivityIcon />,
    Kontakt: <MailIcon />,
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: "block", sm: "block" },
            color: "black",
          }}
        >
          <img
            src={HuvudloggaBKC3}
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 10 }}
          />
        </Typography>
      </Box>
      <Divider />
      <List>
        {navRoutes.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              {" "}
              {/* Handle navigation on click */}
              <ListItemIcon>
                {/* Safely render the correct icon */}
                {icons[item.label]}{" "}
                {/* icons[item.label] based on the icons you defined */}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      {currentUser ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "10px",
            fontWeight: 500,
          }}
        >
          <Typography
          
            sx={{
              color: "#337f83",
              fontWeight: 500,
              fontSize: "1.4rem",
              marginLeft: "20px"
            }}
          >
            {currentUser.firstName} {/* Safe access to user.name */}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#337f83", fontWeight: 800, marginLeft: "5px" }}
          >
            /
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              color: "#337f83",
              fontWeight: 600,
              fontSize: "1.0rem",
             
            }}
          >
            logga ut
          </Button>
        </Box>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogin}>
              <ListItemIcon>
                <LoginIcon sx={{marginRight:"30px"}}/> Logga in
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
