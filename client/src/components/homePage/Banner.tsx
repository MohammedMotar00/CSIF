import React from "react";
import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <div>
        <div style={{ marginBottom: "10px" }}>
          <h2 data-aos="fade-left" data-aos-duration="10">
            Välkommen
          </h2>
          <h2 data-aos="fade-right">Till</h2>
        </div>

        <h1 data-aos="fade-up" data-aos-duration="3000">
          CITY SKOLIDROTTSFÖRENING
        </h1>
      </div>
    </Container>
  );
};

export default Banner;
