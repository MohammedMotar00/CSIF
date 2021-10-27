import styled from "styled-components";

export const Container = styled.div`
  div {
    transform: translateY(-10%);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: #fff;
  padding: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );

  /* Font styling */
  h1,
  h2 {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    text-shadow: 0 10px 20px rgba(228, 123, 4, 0.8);
  }
  h2 {
    font-size: 50px;

    @media (max-width: 850px) {
      font-size: 40px;
    }
    @media (max-width: 600px) {
      font-size: 25px;
    }
    @media (max-width: 300px) {
      font-size: 20px;
    }
  }
  h1 {
    font-size: 60px;
    @media (max-width: 850px) {
      font-size: 50px;
    }
    @media (max-width: 600px) {
      font-size: 30px;
    }
    @media (max-width: 450px) {
      font-size: 25px;
    }
    @media (max-width: 300px) {
      font-size: 20px;
    }
  }
`;
