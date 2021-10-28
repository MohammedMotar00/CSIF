import React, { Dispatch, SetStateAction } from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MuiListItem from "@material-ui/core/ListItem";

import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/Today";
import NewsIcon from "@material-ui/icons/Receipt";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactPageIcon from "@material-ui/icons/Contacts";

const MenuListItem = withStyles({
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

const ListItem = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "#5c4614",

      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

// Links comp, this render links on Header.tsx
export const Links = () => {
  const styles = makeStyles((styles) => ({
    listItemText: {
      fontSize: "1.2rem",
    },

    listItemIcon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },

    iconStyle: {
      fontSize: "2rem",
      color: "white",
    },

    linkStyle: {
      textDecoration: "none",
    },
  }));

  const classes = styles();

  const allLinks = [
    {
      icon: <HomeIcon className={classes.iconStyle} />,
      text: "Hem",
      link: "/",
    },
    {
      icon: <NewsIcon className={classes.iconStyle} />,
      text: "Nyheter",
      link: "/nyheter",
    },
    {
      icon: <CalendarIcon className={classes.iconStyle} />,
      text: "Kalender",
      link: "/kalender",
    },
    {
      icon: <PhotoAlbumIcon className={classes.iconStyle} />,
      text: "Bildgalleri",
      link: "/bildgalleri",
    },
    {
      icon: <DescriptionIcon className={classes.iconStyle} />,
      text: "Dokument",
      link: "/dokument",
    },
    {
      icon: <ContactPageIcon className={classes.iconStyle} />,
      text: "Kontakt",
      link: "/kontakt",
    },
  ];
  return (
    <>
      {allLinks.map((link, index) => (
        <Link to={link.link} className={classes.linkStyle} key={index}>
          <ListItem key={index} button>
            <div>
              <ListItemIcon className={classes.listItemIcon}>
                {link.icon}
                <ListItemText classes={{ primary: classes.listItemText }}>
                  {link.text}
                </ListItemText>
              </ListItemIcon>
            </div>
          </ListItem>
        </Link>
      ))}
    </>
  );
};

interface Props {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export const MenuLinks = ({ setOpenDrawer }: Props) => {
  const styles = makeStyles((theme) => ({
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

    linkStyle: {
      textDecoration: "none",
    },
  }));
  const classes = styles();

  const allLinks = [
    {
      icon: <HomeIcon className={classes.iconStyle} />,
      text: "Hem",
      link: "/",
    },
    {
      icon: <NewsIcon className={classes.iconStyle} />,
      text: "Nyheter",
      link: "/nyheter",
    },
    {
      icon: <CalendarIcon className={classes.iconStyle} />,
      text: "Kalender",
      link: "/kalender",
    },
    {
      icon: <PhotoAlbumIcon className={classes.iconStyle} />,
      text: "Bildgalleri",
      link: "/bildgalleri",
    },
    {
      icon: <DescriptionIcon className={classes.iconStyle} />,
      text: "Dokument",
      link: "/dokument",
    },
    {
      icon: <ContactPageIcon className={classes.iconStyle} />,
      text: "Kontakt",
      link: "/kontakt",
    },
  ];

  return (
    <List className={classes.list}>
      {allLinks.map((link, index) => (
        <Link to={link.link} className={classes.linkStyle} key={index}>
          <MenuListItem
            key={index}
            className={classes.listItem}
            divider
            button
            onClick={() => setOpenDrawer(false)}
          >
            <div className={classes.item}>
              <ListItemIcon className={classes.listItemIcon}>
                {link.icon}
                <ListItemText classes={{ primary: classes.listItemText }}>
                  {link.text}
                </ListItemText>
              </ListItemIcon>
            </div>
          </MenuListItem>
        </Link>
      ))}
    </List>
  );
};
