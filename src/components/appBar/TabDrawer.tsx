import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import HuvudloggaBKC3 from '../../assets/Huvudlogga-BKC3.png'; 
interface TabDrawerProps {
    open: boolean;
    onClose: () => void;
  }
export default function TabDrawer({ open, onClose }: TabDrawerProps) {

const navItems = ['Schedule', 'Services', 'Activities'];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
           <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: 'black' }} 
        >
          <img src={HuvudloggaBKC3} alt="Logo" style={{ maxHeight: 50, marginRight: 10 }} />
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer  open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
