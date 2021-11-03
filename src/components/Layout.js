import { makeStyles } from "@mui/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
      background: "#f9f9f9",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    active: {
      background: "#fafa",
    },
    title: {
      padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
  };
});
export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const text = "/";

  const menuItems = [
    {
      text: "My Class",
      icon: <SubjectOutlined color="secondary"></SubjectOutlined>,
      path: "/",
    },
    {
      text: "Create Class",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/createClass",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar
        style={{ width: `calc(100% - ${drawerWidth}px)` }}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography>
            {location.pathname === text
              ? "Welcome to my Classes"
              : "Create Class"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" align="center" className={classes.title}>
            Classroom
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
