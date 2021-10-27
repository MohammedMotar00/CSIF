import React, { useState, useEffect } from "react";
import {
  List,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  withStyles,
  Drawer,
} from "@material-ui/core";

import { DrawerContainer } from "./styles";

import MuiListItem from "@material-ui/core/ListItem";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/Today";
import NewsIcon from "@material-ui/icons/Receipt";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactPageIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const ListItem = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "#444",

      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

const HamburgerBtn = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const pageResize = () => {
    if (window.innerWidth < 850) {
      setOpenDrawer(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", pageResize);
    return () => window.removeEventListener("resize", pageResize);
  }, []);

  const styles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "orange",
    },

    list: {
      backgroundColor: "rgb(214, 214, 214)",
    },

    listItem: {
      display: "flex",
      justifyContent: "flex-end",
    },

    listItemText: {
      fontSize: "2rem",
      marginLeft: "20px",
    },

    item: {
      minWidth: "70%",
    },

    listItemIcon: {
      display: "flex",
      alignItems: "center",
      color: "black",
      padding: "10px",
    },

    iconStyle: {
      fontSize: "2rem ",
    },

    menuIconToggle: {
      fontSize: "2.5rem",
    },
  }));

  const classes = useStyles();
  const allStyles = styles();

  const allLinks = [
    { icon: <HomeIcon className={allStyles.iconStyle} />, text: "Hem" },
    { icon: <NewsIcon className={allStyles.iconStyle} />, text: "Nyheter" },
    {
      icon: <CalendarIcon className={allStyles.iconStyle} />,
      text: "Kalender",
    },
    {
      icon: <PhotoAlbumIcon className={allStyles.iconStyle} />,
      text: "Bildgalleri",
    },
    {
      icon: <DescriptionIcon className={allStyles.iconStyle} />,
      text: "Dokument",
    },
    {
      icon: <ContactPageIcon className={allStyles.iconStyle} />,
      text: "Kontakt",
    },
  ];

  return (
    <DrawerContainer>
      <Drawer
        className={classes.root}
        anchor="top"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List className={allStyles.list}>
          {allLinks.map((link, index) => (
            <ListItem
              key={index}
              className={allStyles.listItem}
              divider
              button
              onClick={() => setOpenDrawer(false)}
            >
              <div className={allStyles.item}>
                <ListItemIcon className={allStyles.listItemIcon}>
                  {link.icon}
                  <ListItemText classes={{ primary: allStyles.listItemText }}>
                    {link.text}
                  </ListItemText>
                </ListItemIcon>
              </div>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={allStyles.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={allStyles.menuIconToggle} />
      </IconButton>
    </DrawerContainer>
  );
};

export default HamburgerBtn;
