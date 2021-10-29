import React from "react";
import { Link } from "react-router-dom";

import { LoginContainer } from "./styles";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";

const useStyles = makeStyles({
  hoverButton: {
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "rgba(255, 145, 0, 0.575) !important",
      color: "white",
    },
  },

  listItemText: {
    fontSize: "1.2rem",
    color: "white",
  },

  listItemIcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white !important",
    textAlign: "center",
  },

  icon: {
    fontSize: "22px !important",
  },
});

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <LoginContainer>
      <ListItemButton
        className={classes.hoverButton}
        component={Link}
        to="/login"
      >
        <ListItemIcon className={classes.listItemIcon}>
          <LoginIcon className={classes.icon} />
          <ListItemText classes={{ primary: classes.listItemText }}>
            Logga in
          </ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </LoginContainer>
  );
};

export default Login;
