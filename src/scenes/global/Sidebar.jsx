import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const drawerWidth = 280;

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const dataItems = [
    { _id: 1, text: "Manage Team", icon: <PeopleOutlinedIcon />, to: "/team" },
    {
      _id: 2,
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
      to: "/contacts",
    },
    {
      _id: 3,
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      to: "/invoices",
    },
  ];
  const pagesItems = [
    {
      _id: 4,
      text: "Profile Form",
      icon: <PersonOutlinedIcon />,
      to: "/form",
    },
    {
      _id: 5,
      text: "Calendar",
      icon: <CalendarTodayOutlinedIcon />,
      to: "/calendar",
    },
    {
      _id: 6,
      text: "FAQ Page",
      icon: <HelpCenterOutlinedIcon />,
      to: "/faq",
    },
  ];
  const chartsItems = [
    {
      _id: 7,
      text: "Bar Chart",
      icon: <BarChartOutlinedIcon />,
      to: "/bar",
    },
    {
      _id: 8,
      text: "Pie Chart",
      icon: <PieChartOutlineOutlinedIcon />,
      to: "/pie",
    },
    {
      _id: 9,
      text: "Line Chart",
      icon: <TimelineOutlinedIcon />,
      to: "/line",
    },
    {
      _id: 10,
      text: "geography",
      icon: <MapOutlinedIcon />,
      to: "/geography",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        padding: "5px 0",
      }}
    >
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: colors.primary[400],
          },
        }}
        sx={{ width: drawerWidth }}
        variant="permanent"
        anchor="left"
      >
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography>ADMINIS</Typography>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          <Box mb="25px" textAlign="center" margin="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                alt="profile-user"
                src={`../../assets/user.png`}
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box>
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Rich SF
              </Typography>
              <Typography color={colors.green[400]}>Admin</Typography>
            </Box>
          </Box>
        </>
        <List>
          <ListItem>
            <ListItemButton
              component={Link}
              to={"/"}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"dashboard"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Data
        </Typography>
        <List dense>
          {dataItems.map((item) => {
            const { _id, text, icon, to } = item;
            return (
              <ListItem key={_id}>
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={selectedIndex === _id}
                  onClick={(event) => handleListItemClick(event, _id)}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} style={{}} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Pages
        </Typography>
        <List dense>
          {pagesItems.map((item) => {
            const { _id, text, icon, to } = item;
            return (
              <ListItem key={_id}>
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={selectedIndex === _id}
                  onClick={(event) => handleListItemClick(event, _id)}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Charts
        </Typography>
        <List dense>
          {chartsItems.map((item) => {
            const { _id, text, icon, to } = item;
            return (
              <ListItem key={_id}>
                <ListItemButton
                  component={Link}
                  to={to}
                  selected={selectedIndex === _id}
                  onClick={(event) => handleListItemClick(event, _id)}
                >
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
