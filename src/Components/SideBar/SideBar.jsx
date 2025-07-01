import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import DescriptionIcon from "@material-ui/icons/Description";

import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
// import portfolioPic from "../../Images/portfolioPic.jpg";
import "./SideBarStyle.css";
import { Link } from "react-router-dom";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import bf5wallpaper from "../../Images/battlefield5background.png";
import "@fontsource/titillium-web";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      fontFamily: "Titillium Web",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
        fontFamily: "Titillium Web",
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        fontFamily: "Titillium Web",
        color: "secondary",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
        fontFamily: "Titillium Web",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      fontFamily: "Titillium Web",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      fontFamily: "Titillium Web",
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.primary,
      fontFamily: "Titillium Web",
    },
  })
);

export default function SideBar(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="mainSideBarInnerCard">
        {/* <img src={portfolioPic} alt="PortfolioPic" /> */}
        <Typography variant="h5" style={{ fontFamily: "Titillium Web" }}>
          Johnny Chao
        </Typography>
        <Typography variant="caption" style={{ fontFamily: "Titillium Web" }}>
          IT Support Technician
        </Typography>
      </div>
      <Divider />
      <List>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={"Portfolio"} />
          </ListItem>
        </Link>
        <a href="mailto: johnnychao92@gmail.com" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Email Me"} />
          </ListItem>
        </a>
        <a href="https://github.com/strigonone" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={"Git Hub"} />
          </ListItem>
        </a>
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={"+6173469316"} />
        </ListItem>
      </List>

      <a
        href="/Johnny CV2025 V3.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary={"CV"} />
        </ListItem>
      </a>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="secondary"
        className={classes.appBar}
        style={{
          backgroundImage: `url(${bf5wallpaper})`,
          backgroundSize: "Cover",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ color: "black", fontFamily: "Titillium Web" }}
          >
            Johnny Chao
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
    </div>
  );
}
