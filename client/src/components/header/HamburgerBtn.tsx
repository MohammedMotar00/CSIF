import React, { useState, useEffect } from "react";
import { IconButton, makeStyles, Drawer } from "@material-ui/core";

import { DrawerContainer } from "./styles";
import { MenuLinks } from "./Links";

// Icons
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  drawerContainer: {},
  iconButtonContainer: {
    marginLeft: "auto",
    color: "orange",
  },

  menuIconToggle: {
    fontSize: "2.5rem",
  },
}));

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

  const classes = useStyles();

  return (
    <DrawerContainer>
      <Drawer
        className={classes.root}
        anchor="top"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <MenuLinks setOpenDrawer={setOpenDrawer} />
      </Drawer>

      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </DrawerContainer>
  );
};

export default HamburgerBtn;
