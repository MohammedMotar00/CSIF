import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/CSIF2.jpg";
import HamburgerBtn from "./HamburgerBtn";

import {
  HeaderContainer,
  Container,
  ImageContainer,
  Image,
  LinksContainer,
  LoginContainer,
} from "./styles";

import { Links } from "./Links";

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
      <Container>
        <Link to="/">
          <ImageContainer>
            <Image src={Logo} />
          </ImageContainer>
        </Link>

        <LinksContainer>
          <Links />
        </LinksContainer>

        <HamburgerBtn />
        <LoginContainer>Logga in</LoginContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
