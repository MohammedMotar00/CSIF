import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/CSIF2.jpg";
import HamburgerBtn from "./HamburgerBtn";

import {
  HeaderContainer,
  HeaderInnerContainer,
  ImageContainer,
  Image,
  LinksContainer,
} from "./styles";

import { Links } from "./Links";
import Login from "./Login";

const Header = () => {
  const location = useLocation();
  const [scrollShow, setScrollShow] = useState<string>("");

  const pageScroll = () => {
    if (window.scrollY > 100) {
      setScrollShow("#222");
    } else {
      setScrollShow("");
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrollShow("#222");
    } else {
      setScrollShow("");
      window.addEventListener("scroll", pageScroll);
      return () => window.removeEventListener("scroll", pageScroll);
    }
  }, [location.pathname]);

  return (
    <HeaderContainer scrollShow={scrollShow}>
      <HeaderInnerContainer>
        <Link to="/">
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
        </Link>

        <LinksContainer>
          <Links />
        </LinksContainer>

        <HamburgerBtn />
        <Login />
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;
