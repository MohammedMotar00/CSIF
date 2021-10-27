import React, { useEffect } from "react";
import Banner from "../components/homePage/Banner";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container, ContainerBanner } from "./styles/HomePageStyles";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 20, mirror: true, once: true });
  }, []);

  return (
    <Container>
      <ContainerBanner>
        {/* banner */}
        <Banner />
      </ContainerBanner>

      <br />
      <br />
      <br />
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
      <h1>hej</h1>
    </Container>
  );
};

export default HomePage;
