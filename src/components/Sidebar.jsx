import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  ListAlt,
  Storefront,
  Person,
  Settings,
  AccountBox,
  Group,
  ModeNight,
} from "@mui/icons-material";

const items = [
  { text: "Homepage", href: "#", icon: <Home /> },
  { text: "Pages", href: "#", icon: <ListAlt /> },
  { text: "Group", href: "#", icon: <Group /> },
  { text: "Marketplace", href: "#", icon: <Storefront /> },
  { text: "Friends", href: "#", icon: <Person /> },
  { text: "Settings", href: "#", icon: <Settings /> },
  { text: "Profile", href: "#", icon: <AccountBox /> },
];

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {items.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton componen="a" href="#">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
