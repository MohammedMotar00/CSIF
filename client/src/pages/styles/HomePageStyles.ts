import styled from "styled-components";
import CSIFImage from "../../assets/CSIF3.jpg";

export const Container = styled.div``;

export const ContainerBanner = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${CSIFImage}) no-repeat center center fixed;
  background-size: cover;

  @media (min-width: 1200px) {
    background-size: 100%;
  }
`;
