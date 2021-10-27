import styled from "styled-components";

type Props = {
  scrollShow: string;
};

export const HeaderContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  z-index: 1;
  color: #fff;
  background-color: ${({ scrollShow }) => scrollShow};

  /* Animations for black header shen scroll down */
  transition: all 0.6s ease-in-out;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.7;

  @media (max-width: 850px) {
    display: none !important;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const DrawerContainer = styled.div`
  display: none !important;
  @media (max-width: 850px) {
    display: block !important;
    text-align: center;
  }
`;
