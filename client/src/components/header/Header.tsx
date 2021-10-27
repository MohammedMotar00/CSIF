import React, { useState, useEffect } from "react";
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

const Header = () => {
  const [scrollShow, setScrollShow] = useState<string>("");

  const pageScroll = () => {
    if (window.scrollY > 100) {
      setScrollShow("#222");
    } else {
      setScrollShow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScroll);
    return () => window.removeEventListener("scroll", pageScroll);
  }, []);

  return (
    <HeaderContainer scrollShow={scrollShow}>
      <Container>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>

        <LinksContainer>
          <p>Hem</p>
          <p>Nyheter</p>
          <p>Kalender</p>
          <p>Bildgalleri</p>
          <p>Dokument</p>
          <p>Kontakt</p>
        </LinksContainer>

        <HamburgerBtn />
        <LoginContainer>Logga in</LoginContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
