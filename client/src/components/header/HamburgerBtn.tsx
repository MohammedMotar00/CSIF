import React, { useState, useEffect } from "react";
import { IconButton, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { DrawerContainer } from "./styles";
import { MenuLinks } from "./Links";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    width: "100% !important",
  },
  drawerContainer: {},
  iconButtonContainer: {
    marginLeft: "auto !important",
    color: "orange !important",
  },

  menuIconToggle: {
    fontSize: "2.5rem !important",
  },
}));

const HamburgerBtn: React.FC = () => {
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
